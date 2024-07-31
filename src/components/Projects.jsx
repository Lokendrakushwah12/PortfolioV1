import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Card from './Card'
import TrackBar from './TrackBar'

const cardData = [
  {
    title: 'Project 1',
    description: 'This is a project',
    url: 'https://images.pexels.com/photos/3585001/pexels-photo-3585001.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React', 'Tailwind', 'Firebase'],
    link: 'https://www.google.com',
  },
  {
    title: 'very very Big text 2',
    description: 'This is a project',
    url: 'https://images.pexels.com/photos/3585001/pexels-photo-3585001.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React', 'Tailwind', 'Firebase'],
    link: 'https://www.netflix.com',
  },
  {
    title: 'Project 3',
    description: 'This is a project',
    url: 'https://images.pexels.com/photos/3585001/pexels-photo-3585001.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React', 'Tailwind', 'Firebase'],
    link: 'https://www.amazon.com',
  },
]

const Projects = () => {
  const [visibleProject, setVisibleProject] = useState(cardData[0].title)
  const [link, setLink] = useState(cardData[0].link)
  const [showTrackBar, setShowTrackBar] = useState(true)
  const projectRefs = useRef([])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 50% visibility
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectTitle = entry.target.getAttribute('data-title')
          setVisibleProject(projectTitle)
          // Update the link based on the visible project
          const project = cardData.find((p) => p.title === projectTitle)
          if (project) setLink(project.link)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    projectRefs.current.forEach((ref) => ref && observer.observe(ref))

    return () => {
      projectRefs.current.forEach((ref) => ref && observer.unobserve(ref))
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const windowHeight = window.innerHeight
          const cardTop = rect.top
          const cardBottom = rect.bottom

          // Calculate the rotation value based on the card's position
          const rotationStart = 5
          let rotateValue = rotationStart

          if (cardTop < windowHeight && cardBottom > 0) {
            const progress =
              (windowHeight - cardTop) / (windowHeight + rect.height)
            rotateValue = rotationStart - rotationStart * progress
          }

          gsap.to(ref, {
            rotate: rotateValue,
            duration: 0.1,
            ease: 'power1.out',
          })
        }
      })

      // Check if the scroll position is near the bottom of the page
      const scrollBottom = window.innerHeight + window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const nearBottom = docHeight - scrollBottom < 200 // Adjust the threshold as needed
      if (nearBottom) {
        setShowTrackBar(false)
      } else {
        setShowTrackBar(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="h-full w-full flex justify-center items-start xm:px-2 pb-16">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col justify-center items-center gap-4 pt-6">
            {showTrackBar && <TrackBar projectName={visibleProject} link={link} />}
            <div className="flex flex-col gap-52">
              {cardData.map((data, index) => (
                <div
                  key={index}
                  data-title={data.title}
                  ref={(el) => (projectRefs.current[index] = el)}
                  className="transition-transform duration-500"
                >
                  <Card
                    title={data.title}
                    description={data.description}
                    url={data.url}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
