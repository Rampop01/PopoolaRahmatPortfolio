import React from "react";
import { FaRegUser } from "react-icons/fa";

function About() {
  return (
    <div>
      <div className=" ">
        <div className="flex gap-2 border border-white p-2 px-6  m-4 h-8 rounded-full text-xs w-fit ml-1 mt-40 ">
          <FaRegUser className="mb-4 text-white mt-0.5" />
          <h1 className="text-white"> ABOUT</h1>
        </div>
        <h1 className="text-4xl mb-6 mt-6">
          Simplicity And Fueled
          <span className="text-[#f59e0b]"> By Passion</span>
        </h1>
        <p className="lg:text-[18px]">
          Specialize in designing user-friendly and responsive websites. My
          services are tailored to meet the specific demands of users, and I
          take great pride in consistently delivering projects on time without
          any delays or disappointments. Effective communication,
          problem-solving abilities, and resilience are my strong suits,
          enabling me to comprehend my clients' needs thoroughly and provide
          successful outcomes.
        </p>
      </div>
    </div>
  );
}

export default About;
