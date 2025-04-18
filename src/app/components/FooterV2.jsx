import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { assets } from "../../../public/assets/assets";
import MarqueeText from "./sections/MarqueeText";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FooterV2 = () => {
  const locations = [
    {
      name: "Abu Dhabi",
      title: "Abu Dhabi, UAE",
      address: "Madinat Zayed Tower, 2nd Floor, Muroor Road",
      office: "Office 218 ",
      phone: "+971 4 4521135, +971 4 4520458",
    },
    {
      name: "Dubai",
      title: "Abu Dhabi, UAE",
      address: "P.O. Box 413606, Business Bay - Bay Square 8",
      office: "Office #201 - 202",
      phone: "+971 4 4521135, +971 4 4520458",
    },
    {
      name: "Lebanon",
      title: "Beirut, Lebanon",
      address: "Waterfront city, Dbayeh, Colonnade Avenue,",
      office: "Business Park, BP3, Office 302",
      phone: "+961 4 556382",
    },
  ];

  const [selected, setSelected] = useState("Dubai");

  const currentLocation = locations.find((loc) => loc.name === selected);

  const footerRef = useRef(null);
  const headingRef = useRef(null);
  const contactRefs = useRef([]);
  const socialRefs = useRef([]);
  const locationButtonsRef = useRef(null);
  const locationDetailsRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const heading = headingRef.current;
    const contacts = contactRefs.current;
    const socials = socialRefs.current;
    const locationButtons = locationButtonsRef.current;
    const locationDetails = locationDetailsRef.current;

    gsap.fromTo(
      heading,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      contacts,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 60%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      socials,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 50%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      locationButtons,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: locationButtons,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      locationDetails,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: locationDetails,
          start: "-10% 100%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="pt-[100px] pb-0 bg-black text-white">
      <div className="container">
        <div className="overflow-hidden mb-[100px]">
          <h2 ref={headingRef} className="text-xxxl ">
            Let's collaborate!
          </h2>
        </div>
        <div className="flex items-end justify-between mb-[120px]">
          <div className="text-xxl font-light">
            <div className="overflow-hidden">
              <div ref={(el) => (contactRefs.current[0] = el)}>
                <Link className="leading-none" href={"tel:+971 4 452 1135"}>
                  +971 4 452 1135
                </Link>
              </div>
            </div>
            <div className="overflow-hidden">
              <div ref={(el) => (contactRefs.current[1] = el)}>
                <Link
                  className="leading-none"
                  href={"mailto:info@jtpartners.com"}
                >
                  info<span className="text-[#F9423A]">@</span>jtpartners.com
                </Link>
              </div>
            </div>
          </div>

          <ul className="flex gap-10 pb-2">
            {["Instagram", "LinkedIn", "Facebook"].map((social, index) => (
              <li key={social} className="font-light text-[15px] uppercase">
                <div ref={(el) => (socialRefs.current[index] = el)}>
                  <Link
                    href={"#"}
                    className="flex gap-[10px] text-[#9D9D9C] transition-all duration-300 hover:text-white hover:scale-125"
                  >
                    <span>{social}</span>
                    <Image src={assets.arrwtp} alt="" height={12} width={12} />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div ref={locationButtonsRef} className="overflow-hidden mt-[140px]">
          <div className="flex space-x-4  justify-center ">
            {locations.map((location) => (
              <button
                key={location.name}
                className={`px-[90px] py-[15px] rounded-full border text-xl font-light ${
                  selected === location.name
                    ? "border-white text-white"
                    : "border-gray-500 text-gray-500"
                } transition-all`}
                onClick={() => setSelected(location.name)}
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>

        {/* Location Details */}
        {currentLocation && (
          <div ref={locationDetailsRef} className="overflow-hidden mt-[50px]">
            <div className="text-center">
              <h2 className="text-xl font-light uppercase mb-[25px]">
                {currentLocation.title}
              </h2>
              <p className="text-[#9D9D9C] text-19px">
                {currentLocation.address}
              </p>
              <p className="text-[#9D9D9C] text-19px">
                {currentLocation.office}
              </p>
              <p className="text-[#9D9D9C] text-19px">
                <span className="text-red-500 font-medium">T</span>{" "}
                {currentLocation.phone.split(",")[0]}
                {currentLocation.phone.split(",")[1] && (
                  <>
                    , <span className="text-red-500 font-medium">F</span>{" "}
                    {currentLocation.phone.split(",")[1]}
                  </>
                )}
              </p>
            </div>
          </div>
        )}
        <div className="mt-[60px]">
          <Image
            className="mx-auto invert brightness-0 hover:invert-0 hover:brightness-100 hover:scale-125 duration-300 transition-all cursor-pointer"
            src={assets.plusico}
            width={75}
            height={75}
          />
        </div>
      </div>
   
      <div className="bg-[#111111] py-5 text-center mt-[50px]">
        <div className="container">
          <p className="text-white/70 text-[15px]">
            ©2025 JT & Partners. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;
