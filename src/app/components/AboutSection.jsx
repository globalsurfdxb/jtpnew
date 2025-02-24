import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRefs = useRef([]);
  const buttonRef = useRef(null);

  const paragraphLines = [
    "JT & Partners (JT+P) is an international multidisciplinary",
    "consultant which offers a unique portfolio of architecture,",
    "planning, engineering, project management, infrastructure",
    "and cost consultancy services.",
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const paragraphs = paragraphRefs.current;
    const buttonText = buttonRef.current;

    gsap.fromTo(
      heading,
      { /* y: "100%", */ x: "-10%",  opacity: 0 },
      {
       /*  y: 0, */
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "10% 50%",
          end: "bottom top",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    paragraphs.forEach((para, index) => {
      gsap.fromTo(
        para,
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "40% 50%",
            end: "bottom top",
            // markers: true,
            toggleActions: "play reverse play reverse"
          }
        }
      );
    });

    gsap.fromTo(
      buttonText,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      /*   delay: 0.4, */
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "40% 50%",
          end: "bottom top",
          toggleActions: "play reverse play reverse"
        }
      }
    );
  }, []);

  return (
    <section className='section-padding' ref={sectionRef}>
      <div className="container">
        <div className="overflow-hidden">
          <h2
            ref={headingRef}
            className='text-xxxl leading-none'
          >
            Design the future Now
          </h2>
        </div>
        <div className="relative z-10 text-black flex items-end flex-col">
          <div className='w-[70%]'>
            {paragraphLines.map((line, index) => (
              <div key={index} className="overflow-hidden">
                <p
                  ref={el => paragraphRefs.current[index] = el}
                  className="text-xl font-light"
                >
                  {line}
                </p>
              </div>
            ))}
             <div className="">
            <Link href={'#'} ref={buttonRef}  className="mt-6 flex items-center text-[19px] font-light group">
              <span className="text-2xl mr-3">
                <Image className='transition-all duration-500 ease-in-out group-hover:scale-125' src={'/assets/img/plusicon.svg'} alt='' width={40} height={40} />
              </span>
              <div className="overflow-hidden">
                <span>Know More Us</span>
              </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
