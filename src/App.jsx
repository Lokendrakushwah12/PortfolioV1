import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Lenis from "lenis";
import Loader from "./components/Loader";

function App() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [headline, setHeadline] = useState("Selected Projects");
  const [showLoader, setShowLoader] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (activeTab === "Projects") {
      setHeadline("Selected Projects");
    } else if (activeTab === "Info") {
      setHeadline("About me");
    }
  }, [activeTab]);

  useEffect(() => {
    const getRandomTimeout = () => {
      const options = [300, 500, 700];
      return options[Math.floor(Math.random() * options.length)];
    };

    const handleLoader = () => {
      setShowLoader(false);
      const randomDuration = getRandomTimeout();
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, randomDuration);

      return () => clearTimeout(timer);
    };

    if (initialLoad) {
      handleLoader();
      setInitialLoad(false);
    } else {
      handleLoader();
    }
  }, [activeTab, initialLoad]);

  return (
    <BrowserRouter>
      <div className="lg:max-w-4xl mx-auto max-w-xl px-6 text-base xm:max-w-lg xm:px-0 md:max-w-3xl">
        <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
        <Hero headline={headline} />
        {showLoader ? (
          <Loader />
        ) : (
          <>{activeTab === "Projects" ? <Projects /> : <Info />}</>
        )}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
