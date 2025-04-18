"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import logo from '../../../public/assets/img/logo.svg'
import hamburger from '../../../public/assets/img/hamburger.svg'

export default function HeaderV3() {
   const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        // Scrolling down, show header
        setShowHeader(true);
      } else {
        // Scrolling up, hide header
        setShowHeader(false);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    if (showHeader) {
      gsap.to(".header", { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
    } else {
      gsap.to(".header", { y: -100, opacity: 0, duration: 0.5, ease: "power2.out" });
    }
  }, [showHeader]);

  return (
    <header
      className="header  z-10 fixed top-0 left-0 transition-all w-full"
      style={{ transform: "translateY(-100%)", opacity: 0 }}
    >
      <div className="container flex justify-between ">
        <div>
         {/*  <Image src={logo} className="h-[45px] xxxl:h-[50px] w-auto" alt="Logo" width={300} height={100} /> */}
        </div>
        <div className="bg-[#1B1F23]  h-[85px] xxxl:h-[100px] py-[25px] px-[20px] xxxl:py-[30px] xxxl:px-[25px] items-center flex">
          <Image src={hamburger} className="h-[25px] xxxl:h-[32px] w-auto" alt="Menu" width={80} height={80} />
        </div>
      </div>
    </header>
  );
}
