import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
function AboutMeCard() {
  return (
    <div className="lg:fixed ml-8 -mr-2 lg:ml-0 mt-2 lg:mt-0">
      <div className=" bg-black  rounded-2xl border-2 border-[#f59e0b] p-4 ">
        <div className="flex flex-col text-center justify-center items-center">
          <h1 className="text-[#f59e0b] mt-6 mb-6 font-bold text-2xl">
            Rampop&reg;
          </h1>
          <img
            className="w-[200px] h-[180px] rounded-lg object-cover"
            src="headshot.jpeg"
            alt="Headshot of Popoola Rahmat Omowumi"
          />
          <h1 className="text-white mt-8 ">Popoolarahmat@gmail.com</h1>
          <h1 className="text-white ml-8">Lagos,Nigeria</h1>
          <div className="flex gap-2 mt-16">
            <Link to="https://www.linkedin.com/in/popoola-rahmat/">
              <FaLinkedinIn className="text-[#f59e0b] text-4xl border rounded-full p-2 " />
            </Link>
            <Link to="https:twitter.com/OmowumiRahmat">
              <BsTwitterX className="text-[#f59e0b] text-4xl border rounded-full p-2 " />
            </Link>
            <Link to="https://github.com/rampop01/">
              <FaGithub className="text-[#f59e0b] text-4xl border rounded-full p-2 " />
            </Link>
            <Link to="https://medium.com/@popoolarahmat96">
              <FaMedium className="text-[#f59e0b] text-4xl border rounded-full p-2 " />
            </Link>
          </div>
          <Link to="https://docs.google.com/document/d/1Fzap4aBv-i-fg3zXOdxDhkE-k0xeNnhSOOG_hPeBW9c/edit?tab=t.0" target="_blank">
            <button className=" flex gap-2 bg-[#f59e0b] border rounded-full px-16 py-2  mb-6 text-white font-bold cursor-pointer mt-20 hover:bg-[#facc15] items-center justify-center ">
              <AiOutlineMail className="text-black font-bold text-2xl" />
              <span className="text-black font-bold ">HIRE ME</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutMeCard;
