import React from "react";
import { IoHomeOutline } from "react-icons/io5";

function calculateYearsOfExperience() {
  const startDate = new Date(2023, 1, 20); // February 20, 2023 (month is 0-indexed)
  const currentDate = new Date();
  
  let years = currentDate.getFullYear() - startDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  if (currentMonth < 1 || (currentMonth === 1 && currentDay < 20)) {
    years -= 1;
  }
  return Math.max(0, years);
}

function HomeContent() {
  const yearsOfExperience = calculateYearsOfExperience();
  return (
    <div className="bg-black w-fit">
      <div className="flex gap-2 border border-white p-2 px-6  h-8 rounded-full text-xs w-fit mb-8 mt-8">
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
          Smartcontract Developer || Frontend Developer
        </h2>
        <p>
          I design and code, I prioritize the development of website that are
          user-centric.
        </p>
      </div>
      <div className="flex gap-20 lg:mt-36 mt-20 -mb-16 ">
        <div>
          <h1 className="text-6xl text-[#f59e0b]">{yearsOfExperience}+</h1>
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
