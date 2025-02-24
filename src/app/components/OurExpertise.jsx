import Image from "next/image";
import React, { useEffect, useState } from "react";
import srvc01 from "../../../public/assets/img/c03.jpg";
import { assets } from "../../../public/assets/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurExpertise = () => {
  const [activeTab, setActiveTab] = useState(1);
  const sectionRef = React.useRef(null);
  const pinnedContentRef = React.useRef(null);
  const contentRefs = React.useRef([]);
  const imageRef = React.useRef(null);
  const titleRef = React.useRef(null);

  const tabs = [
    {
      id: 1,
      number: "01",
      title: "Architecture",
      description: "We provide sustainable architectural designs that promote the quality of life and create legacies for future generations. We focus on design solutions that bring harmony instead of disruption to our natural world."
    },
    {
      id: 2,
      number: "02",
      title: "Engineering",
      description: "We deliver challenging projects from concept designs through to detailed design and construction supervision. Our success lies in our attention to details to produce innovative and novel engineering design solutions."
    },
    {
      id: 3,
      number: "03",
      title: "Interior Design",
      description: "We create functional and sustainable interior designs that enhance, harmonise, and complement the building architecture and theme. Our interior design solutions provide enrichment, enjoyment and address the needs/requirements of our clients and the end-users."
    },
   /*  {
      id: 4,
      number: "04",
      title: "Urban Design and Master Planning",
      description: " We are committed to delivering environmental and socially sustainable communities with a strong sense of social cohesion and well-being that add value at both a social and urban level."
    },
    {
      id: 5,
      number: "05",
      title: "Landscaping",
      description: "We blend our knowledge of the environment, clients’ requirements, and guidance from planning regulations to provide designs that complement the building architecture, enhance the beauty of spaces, and encourage the social wellbeing of communities."
    } */
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Pin and tab switching animation
    if (sectionRef.current && pinnedContentRef.current) {
      const totalHeight = window.innerHeight * (tabs.length - 1);

      const pinTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "30% top",
        end: `+=${totalHeight}px`,
        pin: pinnedContentRef.current,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const tabIndex = Math.floor(progress * tabs.length) + 1;
          setActiveTab(Math.min(tabIndex, tabs.length));
        }
      });

      return () => {
        pinTrigger.kill();
      };
    }
  }, []);
  

  // New effect for tab content animations
  useEffect(() => {
    // Animate content elements
    gsap.fromTo(
      contentRefs.current,
      {
        y: '-10%',
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      }
    );

    // Animate image with right to left reveal
    gsap.fromTo(
      imageRef.current,
      {
        x: 100, // Start from right
        opacity: 0,
      },
      {
        x: 0,    // Move to original position
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, [activeTab]);


  // Add image wrapper ref for reveal effect
  const imageWrapperRef = React.useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Image reveal animation on scroll
    gsap.fromTo(
      imageRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageWrapperRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  // Add this new useEffect for the title animation
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        y: "100%",
        x: '-10%',
        opacity: 0
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          // markers: true,
          toggleActions: "play none none reverse"
        }
      }
    );
   
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-black text-white min-h-screen relative">
      <div className="container">
        <div className="overflow-hidden mb-[90px]">
          <h2 ref={titleRef} className="text-xxxl text-center leading-none mb-[20px] reveal-text">
            Our Expertise
          </h2>
        </div>

        {/* Pinned Content Container */}
        <div ref={pinnedContentRef}>
          {/* Tabs Navigation */}
          <div className="flex-col w-full gap-[20px] mb-[80px]">
            {tabs.map((tab) => (
              <>
               <hr className="bg-gradient-to-r from-white/40 to-transparent h-[1px] border-none"></hr>
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 cursor-pointer transition-all duration-500 ease-in-out ${activeTab === tab.id ? "" : ""
                  } hover:opacity-100`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`flex gap-[20px]  font-light text-[20px] transition-opacity duration-500 ${tab.id <= activeTab ? "opacity-100 my-3 translate-y-0" : "opacity-0 h-0 -translate-y-5"
                      }`}
                  >
                    <p>{tab.number}</p>
                    <p>{tab.title}</p>
                  </div>
                </div>
              </div>
              <hr className={`bg-gradient-to-r from-white to-transparent  border-none transition-all duration-500 ease-in-out  ${tab.id <= activeTab ? "h-[1px]" : "h-0"}`}></hr>
              </>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2">
            <div className="h-full flex flex-col">
              <div className="overflow-hidden">
                <h3
                  ref={el => contentRefs.current[0] = el}
                  className="current-running text-[70px] xxxl:text-[80px] font-light leading-none"
                >
                  {tabs.find(tab => tab.id === activeTab)?.number}
                </h3>
              </div>
              <div className="mt-auto">
                <div className="contentb">
                  <div className="overflow-hidden">
                    <h3
                      ref={el => contentRefs.current[1] = el}
                      className="text-xxl mb-[60px] xxxl:mb-[80px] leading-none"
                    >
                      {tabs.find(tab => tab.id === activeTab)?.title}
                    </h3>
                  </div>
                 {/* */}
                 <div className="overflow-hidden relative  before:content-[''] before:absolute before:bg-gradient-to-b before:h-[30%] before:z-10 before:w-full before:from-black/10 before:to-transparent after:content-[''] after:absolute after:bg-gradient-to-t after:h-[30%] after:z-10 after:w-full after:from-black after:to-transparent after:right-0 after:bottom-0 ">
                  <p
                    ref={el => contentRefs.current[2] = el}
                    className="text-xl relative w-[80%] h-[180px] overflow-hidden line-clamp-4"
                  >
                    {tabs.find(tab => tab.id === activeTab)?.description}
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <figure
                ref={imageWrapperRef}
                className="before:content-[''] before:absolute before:bg-gradient-to-r before:h-full before:z-10 before:w-[30%] before:from-black before:to-transparent after:content-[''] after:absolute after:bg-gradient-to-l after:h-full after:z-10 after:w-[30%] after:from-black after:to-transparent after:right-0 relative w-full h-full min-h-[500px] xxxl:min-h-[550px] overflow-hidden"
              >
                <Image
                  ref={imageRef}
                  className="w-full h-full absolute z-0 object-cover"
                  src={srvc01}
                  alt="service"
                  width={1000}
                  height={800}
                />
              </figure>
            </div>
          </div>
          <div className="text-center mt-[50px] ">
            <Image className="mx-auto transition-all duration-500 ease-in-out hover:scale-150 cursor-pointer" src={assets.plusico} width={50} height={50} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
