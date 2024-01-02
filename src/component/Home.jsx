import React from "react";
import AboutMeCard from "./AboutMeCard";
import LeftSidebar from "./LeftSidebar";
import { IoHomeOutline } from "react-icons/io5";
import { PiHandWavingLight } from "react-icons/pi";

import About from "./About";
import Education from "./Education";
import Services from "./Services";
import MySkills from "./MySkills";
import Project from "./Project";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import HomeContent from "./HomeContent";

function Home() {
  return (
    <div className="bg-black text-white mx-4 lg:pt-3  ">
      <div className="bg-black lg:flex space-x-8 ">
        <AboutMeCard className="lg:h-[100vh]" />
        <div className="lg:pl-[25%] lg:pr-[45px] lg:pt-8 ">
          <HomeContent />
          <About />
          <Education />
          <Services />
          <MySkills />
          <Project />
          <Testimonial />
          <Contact />
        </div>
        <LeftSidebar className="lg:pr-8" />
      </div>
    </div>
  );
}

export default Home;
