"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSectionV3";
import AboutSection from "./AboutSection";
import OurExpertise from "./OurExpertise";
import ArchitecturalExcellence from "./ArchitecturalExcellence";
import News from "./News";
import OurTeam from "./OurTeam";
import HeaderV3 from "./HeaderV3";
import FooterV2 from "./FooterV2";
const LandingPageV3 = () => {
  const [hideVideo, setHideVideo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("introVideo");



    if (videoElement) {
      const handleTimeUpdate = () => {
        if (videoElement.duration && videoElement.currentTime >= videoElement.duration - 0.8) {
          setFadeOut(true);
        }
      };

      const handleVideoEnd = () => {
        setHideVideo(true);
      };

      videoElement.addEventListener("timeupdate", handleTimeUpdate);
      videoElement.addEventListener("ended", handleVideoEnd);

      return () => {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  return (
    <div className="relative">
      {/* Video Section with Smooth Fade-Out */}
      {!hideVideo && (
        <div
          className={`fixed inset-0 flex justify-center items-center bg-black z-50 transition-opacity duration-5000 w-full h-full ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <video
            id="introVideo"
            autoPlay
            muted
            className="w-full h-full object-cover"
          >
            <source src="/assets/loader.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Main Content */}
      <div>
        <HeaderV3/>
        <HeroSection />
        <AboutSection />
        <OurExpertise />
        <ArchitecturalExcellence />
        <News />
        <OurTeam />
        <FooterV2 />
      </div>
    </div>
  );
};

export default LandingPageV3;
