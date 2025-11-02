import React from "react";
import { FaRegUser } from "react-icons/fa";

function About() {
  return (
    <div>
      <div className=" " id="about">
        <div className="flex gap-2 border border-white p-2 px-6  m-4 h-8 rounded-full text-xs w-fit ml-1 mt-40 ">
          <FaRegUser className="mb-4 text-white mt-0.5" />
          <h1 className="text-white"> ABOUT</h1>
        </div>
        <h1 className="text-4xl mb-6 mt-6">
          Simplicity And Fueled
          <span className="text-[#f59e0b]"> By Passion</span>
        </h1>
        <p className="lg:text-[18px]">
        I specialize in designing user-friendly and responsive websites tailored to meet the specific needs of users. I take great pride in consistently delivering projects on time without delays or disappointments. My strong communication, problem-solving skills, and resilience enable me to fully understand client needs and deliver successful outcomes. Beyond traditional web development, I’m deeply involved in the Web3 ecosystem, building decentralized applications and writing secure smart contracts using Solidity and Rust. I also work with Rust-based frameworks to create scalable, high-performance blockchain solutions that bridge functionality between front-end interfaces and decentralized networks.        </p>
      </div>
    </div>
  );
}

export default About;
