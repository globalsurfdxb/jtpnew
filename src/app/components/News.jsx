import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import plusico from "../../../public/assets/img/plusicon.svg";
import Image from 'next/image';

const News = () => {
  const titleRef = useRef(null);
  const titleWrapperRef = useRef(null);
  const newsItemsRef = useRef([]);
  const newsWrapperRefs = useRef([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Title reveal animation
    gsap.fromTo(titleRef.current,
      {
        y: "100%",
      },
      {
        y: "-5%",
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleWrapperRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // News items reveal animation
    newsItemsRef.current.forEach((item, index) => {
      gsap.fromTo(item,
        {
          y: "100%",
        },
        {
          y: "0%",
          duration: 1,
          delay: index * 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".nws-items",
            start: "-20% bottom-=100",
            // markers: true,
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      className="section-padding bg-gradient-to-b from-[#F5F5F5] to-transparent"
    >
      <div className="container flex justify-end">
         <div className='w-[90%]'>
          <div ref={titleWrapperRef} className="overflow-hidden pl-[30px] xxxl:pl-[35px] mb-[50px]">
            <h2
              ref={titleRef}
              className="text-xxxl text-left leading-none"
            >
              News
            </h2>
          </div>
          <div className="nws-items border-black/20 border-b">
            <div
              ref={el => newsWrapperRefs.current[0] = el}
              className="overflow-hidden "
            >
              <div
                ref={el => newsItemsRef.current[0] = el}
                className="items cursor-pointer border-t border-black/20 p-[40px] xxxl:p-[50px] flex justify-between items-start transition-all duration-300 relative hover:text-white before:absolute before:content-[''] before:bg-black before:inset-0 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300 before:ease-out before:-z-10"
              >
                <h3 className="text-xl w-[60%]">
                  NEOM announces Elanan, a unique wellness retreat embedded in
                  nature
                </h3>
                <p className="w-[20%]">15-05-2025</p>
                <Image src={plusico} alt="" width={50} height={50} className="transition-transform duration-300 hover:rotate-45" />
              </div>
            </div>
            <div
              ref={el => newsWrapperRefs.current[1] = el}
              className="overflow-hidden"
            >
              <div
                ref={el => newsItemsRef.current[1] = el}
                className="items cursor-pointer border-t border-black/20 p-[40px] xxxl:p-[50px] flex justify-between items-center transition-all duration-300 relative hover:text-white before:absolute before:content-[''] before:bg-black before:inset-0 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300 before:ease-out before:-z-10"
              >
                <h3 className="text-xl w-[60%]">
                Designed by JT+Partners, the largest Hampton by Hilton in the World has opened its doors
                </h3>
                <p className="w-[20%]">15-05-2025</p>
                <Image src={plusico} alt="" width={50} height={50} className="transition-transform duration-300 hover:rotate-45" />
              </div>
            </div>
            <div
              ref={el => newsWrapperRefs.current[2] = el}
              className="overflow-hidden"
            >
              <div
                ref={el => newsItemsRef.current[2] = el}
                className="items cursor-pointer border-t border-black/20 p-[40px] xxxl:p-[50px] flex justify-between items-center transition-all duration-300 relative hover:text-white before:absolute before:content-[''] before:bg-black before:inset-0 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300 before:ease-out before:-z-10"
              >
                <h3 className="text-xl w-[60%]">
                Joe Tabet ranked as one of the region’s leading architects and designers in Design Middle East’s Creative 30 Powerlist
                </h3>
                <p className="w-[20%]">15-05-2025</p>
                <Image src={plusico} alt="" width={50} height={50} className="transition-transform duration-300 hover:rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News