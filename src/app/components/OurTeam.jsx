import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const OurTeam = () => {
  const titleRef = useRef(null);
  const titleWrapperRef = useRef(null);
  const teamMembersRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: teamMembersRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    });

    titleTl.from(titleRef.current, {
      duration: 1.5,
      yPercent: 100,
      ease: "power4.out",
    });

    gsap.to(teamMembersRef.current, {
      x: '-70%',
      ease: "none",
      scrollTrigger: {
        trigger: ".meet-our-team",
        start: "50% 50%",
        end: "500% 50%",
        scrub: 1,
        pin: true,
        // markers: true,
      }
    });

    return () => {
      titleTl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const teamMembers = [
    {
      name: "Joe Tabet",
      role: "Founder & Managing Director",
      image: "/assets/img/Joe-Tabet 1.jpg", // Replace with actual image path
    },
    {
      name: "Joseph Damien",
      role: "Commercial Projects Director",
      image: "/assets/img/IMG_6473a 1.jpg", // Replace with actual image path
    },
    {
      name: "Ghada Tabet",
      role: "HR & Admin Director",
      image: "/assets/img/Ghada-Tabet 1.jpg", // Replace with actual image path
    },
    {
      name: "Joe Tabet",
      role: "Founder & Managing Director",
      image: "/assets/img/Joe-Tabet 1.jpg", // Replace with actual image path
    },
    {
      name: "Joseph Damien",
      role: "Commercial Projects Director",
      image: "/assets/img/IMG_6473a 1.jpg", // Replace with actual image path
    },
    {
      name: "Ghada Tabet",
      role: "HR & Admin Director",
      image: "/assets/img/Ghada-Tabet 1.jpg", // Replace with actual image path
    },
    {
      name: "Joe Tabet",
      role: "Founder & Managing Director",
      image: "/assets/img/Joe-Tabet 1.jpg", // Replace with actual image path
    },
    {
      name: "Joseph Damien",
      role: "Commercial Projects Director",
      image: "/assets/img/IMG_6473a 1.jpg", // Replace with actual image path
    },
    {
      name: "Ghada Tabet",
      role: "HR & Admin Director",
      image: "/assets/img/Ghada-Tabet 1.jpg", // Replace with actual image path
    },
    {
      name: "Joe Tabet",
      role: "Founder & Managing Director",
      image: "/assets/img/Joe-Tabet 1.jpg", // Replace with actual image path
    },
   
  
  ];

  return (
    <section className="meet-our-team section-padding overflow-hidden">
      <div className="container">
        <div ref={titleWrapperRef} className="relative overflow-hidden  mb-[100px]">
          <h2
            ref={titleRef}
            className="text-xxxl text-left leading-none"
          >
            Meet Our Team
          </h2>
        </div>
        <div
          ref={teamMembersRef}
          className="team-members flex flex-nowrap gap-0 w-[350%]"
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center w-[20%]">
                <figure className='h-[380px] xxxl:h-[450px] border-b border-black/20 mb-[50px]'>
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={800}
                className="h-full object-contain object-left"
              />
              </figure>
              <div className='text-start'>
            <h3 className="mb-[15px] text-xl">{member.name}</h3>
            <p className="text-[#878787]">{member.role}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam