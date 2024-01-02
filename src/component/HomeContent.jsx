import React from "react";
import { IoHomeOutline } from "react-icons/io5";

function HomeContent() {
  return (
    <div className="bg-black w-fit bg-black ">
      <div className="flex gap-2 border border-white p-2 px-6  h-8 rounded-full text-xs w-fit mb-8">
        <IoHomeOutline className="text-white mt-0.5" />
        <h1 className="text-white">INTRODUCE</h1>
      </div>
      <div className="">
        <h1 className=" text-4xl lg:text-6xl">
          Hi , I am
          <span className="font-bold">
            &nbsp;Popoola <br /> Rahmat Omowumi.
          </span>
        </h1>
        <h2 className="text-2xl lg:text-3xl text-[#f59e0b] mt-4 mb-2">
          Frontend Developer
        </h2>
        <p>
          I design and code, I prioritize the development of website that are
          user-centric.
        </p>
      </div>
      <div className="flex gap-20 mt-36 ">
        <div>
          <h1 className="text-6xl text-[#f59e0b]">1+</h1>
          <p className="text-slate-400">
            YEAR OF <br></br> EXPERIENCE
          </p>
        </div>
        <div>
          <h1 className="text-6xl text-[#f59e0b]">10+</h1>
          <p className="text-slate-400">
            PROJECT <br></br> COMPLETED
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
