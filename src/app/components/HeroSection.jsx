"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import c01web2 from "../../../public/assets/img/c01web-2.jpg";
import MenuSec from "./MenuSec";

const projects = [
  {
    id: 1,
    title: "Hilton Marjan Island Beach Resort & Spa",
    title1: "Hilton Marjan Island Beach",
    title2: "Beach Resort & Spa",
    client: "MR Properties",
    type: "5 Star Hilton Hotel & Branded Residences",
    description:
      "Perched on the captivating Al Marjan Island, the Hilton 5-star hotel masterfully balances serene beach front luxury with the thrilling allure of a vibrant casino. Nestled beside the existing Hampton by Hilton Al Marjan Island, this architectural marvel offers guests and residents an unparalleled experience that fuses relaxation and entertainment.",
    image: c01web2,
  },
  {
    id: 2,
    title: "Hilton Marjan Island Beach Resort & Spa",
    title1: "Hilton Marjan Island Beach",
    title2: "Beach Resort & Spa",
    client: "MR Properties",
    type: "5 Star Hilton Hotel & Branded Residences",
    description:
      "Perched on the captivating Al Marjan Island, the Hilton 5-star hotel masterfully balances serene beach front luxury with the thrilling allure of a vibrant casino. Nestled beside the existing Hampton by Hilton Al Marjan Island, this architectural marvel offers guests and residents an unparalleled experience that fuses relaxation and entertainment.",
    image: c01web2,
  },
  {
    id: 3,
    title: "Hilton Marjan Island Beach Resort & Spa",
    title1: "Hilton Marjan Island Beach",
    title2: "Beach Resort & Spa",
    client: "MR Properties",
    type: "5 Star Hilton Hotel & Branded Residences",
    description:
      "Perched on the captivating Al Marjan Island, the Hilton 5-star hotel masterfully balances serene beach front luxury with the thrilling allure of a vibrant casino. Nestled beside the existing Hampton by Hilton Al Marjan Island, this architectural marvel offers guests and residents an unparalleled experience that fuses relaxation and entertainment.",
    image: c01web2,
  }
];

const HeroSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = projects.length;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Create master timeline
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `${totalSlides * 200}% top`,
          scrub: 1,
          pin: true,
          // markers: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (totalSlides - 1)) + 1;
            const progress = Math.min(Math.max(self.progress, 0), 1);
            setCurrentSlide(Math.min(index, totalSlides));

            // Animate the progress line
            gsap.to(".progress-line", {
              height: `${(progress * 100)}%`,
              duration: 0.1,
            });
          },


        }
      });

      // Add animations to the timeline
      projects.forEach((_, index) => {
        // Create a simultaneous animation for title fade out, content box slide in, and gradient effect
        masterTl.to(`.slide:nth-child(${index + 1}) .title`, {
          opacity: 0,
          duration: 0.8,
        }, `slide${index}`)
          .to(`.slide:nth-child(${index + 1}) .content-box`, {
            right: "0",
            duration: 1,
            ease: "power2.inOut"
          }, `slide${index}`)
          .fromTo(`.slide:nth-child(${index + 1}) .gradient-overlay`, {
            backgroundColor: 'hsla(0%,0%,0%,0)',
            backgroundImage: `
            radial-gradient(at 99% 19%, hsla(0%,0%,0%,0) 0px, transparent 80%),
            radial-gradient(at 0% 100%, hsla(0%,0%,0%,0) 0px, transparent 80%),
            radial-gradient(at 100% 75%, hsla(0%,0%,0%,0) 0px, transparent 30%),
            radial-gradient(at 34% 0%, hsla(0%,0%,0%,0) 0px, transparent 30%)
          `}, {
            backgroundColor: 'hsla(0%,0%,0%,0)',
            backgroundImage: `
            radial-gradient(at 99% 19%, hsla(0%,0%,0%,0.60) 0px, transparent 80%),
            radial-gradient(at 0% 100%, hsla(0%,0%,0%,0) 0px, transparent 80%),
            radial-gradient(at 100% 75%, hsla(0%,0%,0%,0.60) 0px, transparent 80%),
            radial-gradient(at 34% 0%, hsla(0%,0%,0%,0.60) 0px, transparent 80%)
          `,
            duration: 1,
            ease: "power2.inOut"
          }, `slide${index}`);

        // If not the last slide, add horizontal scroll
        if (index < projects.length - 1) {
          masterTl.to(sectionRef.current, {
            x: `-${(index + 1) * 100}vw`,
            duration: 1,
            ease: "none"
          });
        }
      });

      // Initial load animation for the main title and tags
      gsap.from('.slide:first-child .title h1', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 4
      });
      
      // Keep the animation for other slides unchanged
      gsap.from('.slide:not(:first-child) .title h1', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5
      });

      gsap.from('.slide:first-child .title .flex p', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 4.5
      });
      gsap.from('.slide:not(:first-child) .title .flex p', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.8
      });

      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, [totalSlides]);
  /*  useEffect(() => {
     gsap.utils.toArray(".content-box").forEach((box) => {
       gsap.fromTo(
         box,
         { opacity: 1, y: 50 },
         {
           opacity: 1,
           y: 0,
           duration: 1,
           scrollTrigger: {
             trigger: box,
             start: "top 80%",
             toggleActions: "play none none reverse",
           },
         }
       );
     });
   }, []); */

  return (
    <section
      className="h-screen relative overflow-hidden"
      ref={triggerRef}
      suppressHydrationWarning
    >
      <div className="absolute left-0 top-0 h-screen w-16 bg-white flex flex-col items-center justify-between py-10 border-r z-10">
        <div className="h-[200px] flex items-center">
          <span className="text-[15px] text-[#717171] tracking-widest font-light rotate-[-90deg] whitespace-nowrap font-custom">
            FEATURED PROJECTS
          </span>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <div className="w-[1px] h-[110px] bg-gray-300 relative">
            <div className="progress-line w-[2px] bg-red-500 absolute bottom-0" style={{ height: '0%' }}></div>
          </div>
          <span className="text-[15px] rotate-[-90deg] whitespace-nowrap font-light">
            <span className="font-medium "> {`0${currentSlide}`}</span> - {`0${totalSlides}`}
          </span>
        </div>
      </div>
      <div className="absolute w-full bottom-[75px] z-10">
        <div className="container">
          <MenuSec />
        </div>
      </div>
      <div className="prject-sec h-full flex flex-wrap" style={{ width: `${projects.length * 100}vw` }} ref={sectionRef}>

        {projects.map((project, index) => (
          <div key={project.id} className="slide h-full w-screen relative overflow-hidden text-white">
            <figure className="h-full w-full absolute -z-50">
              <Image className="h-full w-full absolute object-cover object-center" src={project.image} alt={project.title} width={2500} height={1000} />
            </figure>
            <div className="h-full w-full -z-40 absolute bg-gradient-to-b from-black to-transparent opacity-60"></div>
            <div
              className="h-full w-full -z-40 absolute gradient-overlay"
              style={{
                backgroundColor: 'hsla(0%,0%,0%,0)',
                backgroundImage: `
                  radial-gradient(at 99% 19%, hsla(0%,0%,0%,0) 0px, transparent 80%),
                  radial-gradient(at 0% 100%, hsla(0%,0%,0%,0) 0px, transparent 80%),
                  radial-gradient(at 100% 75%, hsla(0%,0%,0%,0) 0px, transparent 80%),
                  radial-gradient(at 34% 0%, hsla(0%,0%,0%,0) 0px, transparent 80%)
                `
              }}
            ></div>
            <div className="absolute w-full h-full">
              <div className="container h-full">
                <div className="h-full relative">
                  <motion.div
                    className="title pt-[90px] w-[70%] transition-all ease-in-out"

                  >
                    <div className="overflow-hidden ">
                      <h1 className="text-xxl text-white leading-tight font-custom font-light">
                        {project.title1}
                      </h1>
                    </div>
                    <div className="overflow-hidden">
                      <h1 className="text-xxl text-white leading-tight font-custom font-light">
                        {project.title2}
                      </h1>
                    </div>

                    <div className="flex overflow-hidden gap-[10px] mt-[30px]">
                      <p className="bg-white/30 text-[14px] p-2 rounded-full leading-none px-4 backdrop-blur-[5px]">Completed</p>
                      <p className="bg-white/30 text-[14px] p-2 rounded-full leading-none px-3 backdrop-blur-[5px]">MR Properties</p>
                    </div>
                  </motion.div>
                  <div
                    className="content-box absolute w-[550px] right-[-100%] top-[50%] translate-y-[-50%] bg-black/0"
                  >
                    <h2 className="text-xl">{project.title}</h2>
                    <div className="grid grid-cols-2 items-start mt-[80px] mb-[60px]">
                      <div>
                        <p className="text-[15px] opacity-70 mb-[15px] leading-none">CLIENT</p>
                        <h6 className="text-18px">{project.client}</h6>
                      </div>
                      <div>
                        <p className="text-[15px] opacity-70 mb-[15px] leading-none">TYPE</p>
                        <h6 className="text-18px">{project.type}</h6>
                      </div>
                    </div>
                    <hr className="mb-[80px]" />
                    <p className="opacity-70">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;