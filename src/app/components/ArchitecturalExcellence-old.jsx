import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import award01 from '../../../public/assets/img/Hero-Image-1.jpg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

gsap.registerPlugin(ScrollTrigger);

const ArchitecturalExcellence = () => {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const textLineRefs = useRef([]);
  const titleRef = useRef(null);
  const titleRef2 = useRef(null);

  // Initialize refs for each slide
  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, awards.length);
  }, []);

  // Add this new useEffect for the title animation
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        y: "100%",
        opacity: 0
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
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      titleRef2.current,
      {
        y: "100%",
        opacity: 0
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
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  // Slide change animation handler
  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;

    // Reset all slides
    awards.forEach((_, index) => {
      gsap.set(imageRefs.current[index], { scale: 1.2, opacity: 0 });

      // Reset all text lines
      if (textLineRefs.current[index]) {
        textLineRefs.current[index].forEach(line => {
          gsap.set(line, { y: "100%", opacity: 0 });
        });
      }
    });

    // Animate active slide
    gsap.to(imageRefs.current[activeIndex], {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });

    // Animate text lines of active slide
    textLineRefs.current[activeIndex]?.forEach((line, lineIndex) => {
      gsap.to(line, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: lineIndex * 0.1,
        ease: "power3.out",
      });
    });
  };

  // Progress bar animation handler
  const handleProgress = (swiper) => {
    const activeIndex = swiper.activeIndex;

    // Reset all progress bars
    gsap.set(".progress-bar", { width: "0%" });

    // Animate only the active progress bar
    gsap.to(`.progress-bar-${activeIndex}`, {
      width: "100%",
      duration: 3, // match with autoplay delay
      ease: "none",
    });

    // Show completed lines for previous slides
    for (let i = 0; i < activeIndex; i++) {
      gsap.set(`.progress-bar-${i}`, { width: "100%" });
    }
  };

  const awards = [
    {
      titleLines: [
        "DoubleTree by",
        "Hilton – Jeddah",
        "recognised in",
        "International Award",
      ],
      image: award01
    },
    {
      titleLines: [
        "Excellence in",
        "Architectural",
        "Design - Hospitality",
        "Sector 2021"
      ],
      image: award01
    },
    {
      titleLines: [
        "Best Sustainable",
        "Hotel Design -",
        "Middle East Region",
        "Sector 2021"
      ],
      image: award01
    }
  ];

  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className="flex justify-between items-end">
          <div>
            <div className="overflow-hidden">
              <h2
                ref={titleRef}
                className="text-xxxl text-left leading-none"
              >
                Architectural
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2
                ref={titleRef2}
                className="text-xxxl text-left leading-none"
              >
                Excellence
              </h2>
            </div>
          </div>
          <div>
            <h5>Awards & Achievements</h5>
          </div>
        </div>
        <div className="grid grid-cols-12 justify-end mt-10">
          <div className="col-span-5">
          </div>
          <div className="col-span-7">
            <div className="grid gap-5 grid-cols-3">
              {awards.map((_, index) => (
                <div key={index} className="relative h-[1px]">
                  <div className="absolute top-0 left-0 w-full h-full border-b border-black border-solid opacity-100"></div>
                  <div className={`progress-bar progress-bar-${index} absolute top-0 left-0 h-full w-0 border-b border-red border-solid`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 overflow-hidden">
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            effect="fade"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            fadeEffect={{
              crossFade: true
            }}
            onSlideChange={(swiper) => {
              handleSlideChange(swiper);
              handleProgress(swiper);
            }}
            onInit={(swiper) => {
              handleSlideChange(swiper);
              handleProgress(swiper);
            }}
          >
            {awards.map((award, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-10 gap-[100px] justify-between">
                  <div className="col-span-4 overflow-hidden">
                    <div
                      ref={el => imageRefs.current[index] = el}
                      className="relative w-full"
                    >
                      <Image
                        src={award.image}
                        alt=""
                        width={800}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    {award.titleLines.map((line, lineIndex) => (
                      <div key={lineIndex} className="overflow-hidden">
                        <h3
                          ref={el => {
                            if (!textLineRefs.current[index]) {
                              textLineRefs.current[index] = [];
                            }
                            textLineRefs.current[index][lineIndex] = el;
                          }}
                          className="text-xxl leading-none mb-2"
                          style={{ transform: 'translateY(100%)', opacity: 0 }}
                        >
                          {line}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ArchitecturalExcellence