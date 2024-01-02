import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="">
      <div className="flex gap-2 border border-white p-2 px-6  m-4 h-8 rounded-full text-xs w-fit ml-1 mt-24 lg:mt-40">
        <FaProjectDiagram className="mb-4 text-white mt-0.5" />
        <h1 className="text-white ">PROJECTS</h1>
      </div>
      <h1 className="text-4xl  mb-6 mt-6 ">
        Featured And Personal <span className="text-[#f59e0b]">Projects</span>
      </h1>
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="mb-8 lg:mb-0">
          <img
            className="w-72 h-40 object-fill"
            src="https://res.cloudinary.com/dxswouxj5/image/upload/v1703966317/Screenshot_368_zj0ugl.png"
            alt="THRIVE"
          />
          <h1 className="text-3xl mb-2 mt-2 ">Thrive</h1>
          <p className="mb-2n text-slate-400">
            A mental health application that provides <br /> support, resources
            & tools for individuals <br /> to manage their mental well-being
          </p>
          <div className="flex gap-32">
            <h1 className=" py-2     ">ReactJs</h1>
            <h1 className="px-4 py-2  ">TailwindCSS</h1>
          </div>
          <Link to="https://thrive-react.vercel.app/">
            <button className="bg-[#f59e0b] w-72 flex items-center justify-center py-3 gap-2 hover:bg-[#fef9c3]">
              <LiaEyeSolid className="text-black font-bold" />
              <h1 className="text-black font-bold">Preview</h1>
            </button>
          </Link>
        </div>
        <div className="">
          <img
            className="w-72 h-40 object-fill"
            src="https://res.cloudinary.com/dxswouxj5/image/upload/v1703966324/Screenshot_369_pesqoi.png"
            alt="flickcars"
          />
          <h1 className="text-3xl mb-2 mt-2 ">Flickcars</h1>
          <p className="mb-2n text-slate-400">
            A car parking management application, <br /> that can generate and
            scan QR_Code,
            <br /> Biometrics and questionnieres.
          </p>
          <div className="flex gap-32">
            <h1 className=" py-2     ">ReactJs</h1>
            <h1 className="px-4 py-2  ">TailwindCSS</h1>
          </div>
          <Link to="https://flickcars.vercel.app/">
            <button className="bg-[#f59e0b] w-72 flex items-center justify-center py-3 gap-2 hover:bg-[#fef9c3]">
              <LiaEyeSolid className="text-black font-bold" />
              <h1 className="text-black font-bold ">Preview</h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
