import React from "react";
import { GrServices } from "react-icons/gr";

function Services() {
  return (
    <div className="">
      <div className="flex gap-2 border border-white p-2 px-6  m-4 h-8 rounded-full text-xs w-fit ml-1 mt-40">
        <GrServices className="mb-4 text-white mt-0.5" />
        <h1 className="text-white">SERVICES</h1>
      </div>
      <h1 className="text-4xl mb-6 mt-6">
        My<span className="text-[#f59e0b]"> Specialization</span>
      </h1>
      <div className="border border-white p-10 rounded-3xl mb-2">
        <h1 className="">Website Development</h1>
        <p className="text-slate-400">
          I build readable, scalable and responsive website
        </p>
      </div>
      <div className="border border-white p-10 rounded-3xl mb-2">
        <h1 className="">Website Design</h1>
        <p className="text-slate-400">
          I create digital products with unique ideas using figma
        </p>
      </div>
      <div className="border border-white p-10 rounded-3xl">
        <h1 className="">Mentorship</h1>
        <p className="text-slate-400">
          Capacity to apply the knowledge I have gained to positively influence
          my mentee in the field of my expertise
        </p>
      </div>
    </div>
  );
}

export default Services;
