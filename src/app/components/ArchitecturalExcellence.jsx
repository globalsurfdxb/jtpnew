import Image from "next/image";
import React, { useEffect, useState } from "react";
import srvc01 from "../../../public/assets/img/c03.jpg";
import { assets } from "../../../public/assets/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ArchitecturalExcellence = () => {
  const [activeTab, setActiveTab] = useState(1);
  const sectionRef = React.useRef(null);
  const pinnedContentRef = React.useRef(null);
  const contentRefs = React.useRef([]);
  const imageRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const titleRef2 = React.useRef(null);
  const titleMns = React.useRef(null);

  const tabs = [
    {
      id: 1,
      number: "01",
      title:
        "DoubleTree by Hilton – Jeddah recognised in International Award",
      src: "/assets/img/Hero-Image-1.jpg",
    },
    {
      id: 2,
      number: "02",
      title:
        "Tawila Island Resort, Red Sea Egypt shortlisted for INDEX Design Awards 2021",
      src: "/assets/img/Hero-Image-2.jpg",
    }
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
        },
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
        y: 50,
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
        y: 100, // Start from right
        opacity: 0,
      },
      {
        y: 0, // Move to original position
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
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      titleMns.current,
      {
        x: '-10%',
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Add this new useEffect for the title animation
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          // markers: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      titleRef2.current,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          // markers: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container">
        <div className="flex justify-between items-end  mb-[60px] xxxl:mb-[80px] overflow-hidden">
          <div ref={titleMns}>
            <div className="overflow-hidden">
              <h2 ref={titleRef} className="text-xxxl text-left leading-none">
                Architectural
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 ref={titleRef2} className="text-xxxl text-left leading-none">
                Excellence
              </h2>
            </div>
          </div>
          <div className="overflow-hidden">
            <h5 ref={titleRef} className="text-xl text-[#878787]">
              Awards & <br></br>Achievements
            </h5>
          </div>
        </div>
        {/* Pinned Content Container */}
        <div ref={pinnedContentRef}>
          {/* Tabs Navigation */}
          <div className="grid grid-cols-12 justify-end xxxl:mt-[30px] mb-[80px]">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <p className="text-[19px] mb-4">
              {String(activeTab).padStart(2, "0")} <span className="text-[#717171]">- {"0"+tabs.length}</span>
               {/*  01 <span className="text-[#717171]">- 03</span> */}
              </p>
              <div className="flex w-full gap-[20px] xxxl:mb-[80px]">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 cursor-pointer transition-all duration-500 ease-in-out ${
                      activeTab === tab.id
                        ? "border-[#F9423A] border-solid boredr-b border-b-4"
                        : "border-b border-black  border-solid"
                    } hover:opacity-100`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`flex gap-[20px] my-0 font-light text-[20px] transition-opacity duration-500 ${
                          tab.id <= activeTab ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {/*  <p>{tab.number}</p>
                    <p>{tab.title}</p> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="mt-10 grid grid-cols-10 gap-[100px] xxxl:gap-[200px]  justify-between">
            <div className="col-span-4">
                <figure ref={imageWrapperRef}>
              <Image
               ref={imageRef}
                src={tabs.find((tab) => tab.id === activeTab)?.src}
                alt=""
                width={800}
                height={800}
              />
              </figure>
            </div>
            <div className="col-span-6">
              <div className="h-full flex flex-col">
                <h3
                  className="text-xxl leading-none xxxl:w-[75%]"
                  ref={(el) => (contentRefs.current[0] = el)}
                >
                  {tabs.find((tab) => tab.id === activeTab)?.title}
                </h3>
                <button className="mt-6 flex items-center text-[19px] font-light mt-auto  ">
                  <span className="text-2xl mr-3">
                    <Image
                      src={"/assets/img/plusicon.svg"}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </span>{" "}
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalExcellence;
