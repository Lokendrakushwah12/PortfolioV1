import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Card from "./Card";
import TrackBar from "./TrackBar";
import { AnimatePresence } from "framer-motion";

// Import logo components
import Cauldron from "../assets/logo/Cauldron";
import Pixaui from "../assets/logo/Pixaui";
import Anubhav from "../assets/logo/Anubhav";

import BlurFade from "./BlurFade";

const cardData = [
  {
    title: "Cauldron",
    description:
      "Faceless Video Engine - Automate and dominate YouTube without ever showing your face!",
    tags: ["React", "Tailwind", "Python"],
    link: "https://cauldron.live/",
    Logo: Cauldron,
    github: "https://github.com/Statwarts/Cauldron",
  },
  {
    title: "Pixa ui",
    description:
      "Pixa UI - Collection of Open Source Components for React + TailwindCSS for your Project.",
    tags: ["React", "Tailwind", "Framer-motion"],
    link: "https://pixa-ui.vercel.app/",
    Logo: Pixaui,
    github: "https://github.com/Lokendrakushwah12/pixa-ui",
  },
  {
    title: "Anubhav",
    description:
      "It is a web-based platform that offers articles and resources focused on college placements and interview experiences.",
    tags: ["React", "Tailwind"],
    link: "https://anubhav-frontend-23.vercel.app/",
    Logo: Anubhav,
    github: "https://github.com/aitoss/Anubhav-frontend-23",
  },
];

const Projects = () => {
  const [visibleProject, setVisibleProject] = useState(cardData[0].title);
  const [link, setLink] = useState(cardData[0].link);
  const [logo, setLogo] = useState(cardData[0].Logo);
  const [showTrackBar, setShowTrackBar] = useState(true);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9, // 50% visibility
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectTitle = entry.target.getAttribute("data-title");
          setVisibleProject(projectTitle);
          // Update the link and logo based on the visible project
          const project = cardData.find((p) => p.title === projectTitle);
          if (project) {
            setLink(project.link);
            setLogo(project.Logo);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    projectRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      projectRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const cardTop = rect.top;
          const cardBottom = rect.bottom;

          // Calculate the rotation value based on the card's position
          const rotationStart = 0;
          let rotateValue = rotationStart;

          if (cardTop < windowHeight && cardBottom > 0) {
            const progress =
              (windowHeight - cardTop) / (windowHeight + rect.height);
            rotateValue = rotationStart - rotationStart * progress;
          }

          gsap.to(ref, {
            rotate: rotateValue,
            duration: 0.1,
            ease: "power1.out",
          });
        }
      });

      // Check if the scroll position is near the bottom of the page
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const nearBottom = docHeight - scrollBottom < 200; // Adjust the threshold as needed
      if (nearBottom) {
        setShowTrackBar(false);
      } else {
        setShowTrackBar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex h-full w-full items-start justify-center pb-16 xm:px-2">
        <div className="flex flex-col items-center w-full gap-2">
          <div className="flex flex-col w-full items-center justify-center gap-4 pt-6">
            <AnimatePresence>
              {/* {showTrackBar && (
                <TrackBar
                  projectName={visibleProject}
                  link={link}
                  logo={logo}
                />
              )} */}
            </AnimatePresence>
            <div className="flex flex-col w-full gap-32">
              {cardData.map((data, index) => (
                <div
                  key={index}
                  data-title={data.title}
                  ref={(el) => (projectRefs.current[index] = el)}
                  className="transition-transform w-full duration-500"
                >
                  <BlurFade delay={index / 4} className="w-full">
                    <Card
                      title={data.title}
                      description={data.description}
                      tags={data.tags}
                      github={data.github}
                      Logo={data.Logo}
                      url={data.link}
                    />
                  </BlurFade>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
