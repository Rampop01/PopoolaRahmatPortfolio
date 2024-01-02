import React from "react";
import { GiSkills } from "react-icons/gi";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { VscGithub } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";

function MySkills() {
  return (
    <div>
      <div className="flex gap-2 border border-white p-2 px-6  m-4 h-8 rounded-full text-xs w-fit ml-1 mt-24 lg:mt-40">
        <GiSkills className="mb-4 text-white mt-0.5" />
        <h1 className="text-white ">SKILLS</h1>
      </div>
      <h1 className="text-4xl mb-6 mt-6">
        My<span className="text-[#f59e0b]"> Advantages</span>
      </h1>
      <div className="w-[100%] justify-center grid lg:grid-cols-4 grid-cols-3 lg:gap-y-8 lg:pr-56 gap-4">
        {/* <div className="flex gap-8 flex-wrap"> */}
        <div className="flex flex-col  items-center">
          <AiOutlineHtml5 className="border border-2xl border-white text-8xl p-4 rounded-b-3xl " />
          <h1 className="mt-4 text-center text-slate-400">HTML</h1>
        </div>
        <div className="flex flex-col items-center">
          <TbBrandCss3 className="border border-2xl border-white text-8xl p-4 rounded-b-3xl " />
          <h1 className="mt-4 text-center text-slate-400">CSS</h1>
        </div>

        <div className="flex flex-col items-center">
          <BiLogoTailwindCss className="border border-2xl border-white text-8xl p-4 rounded-b-3xl " />
          <h1 className="mt-4 text-center text-slate-400">TailwindCSS</h1>
        </div>
        <div className="flex flex-col items-center">
          <TbBrandJavascript className="border border-2xl border-white text-8xl p-4 rounded-b-3xl " />
          <h1 className="mt-4 text-center text-slate-400">JavaScript</h1>
        </div>
        <div className="flex flex-col items-center">
          <GrReactjs className="border border-2xl border-white text-8xl p-4 rounded-b-3xl " />
          <h1 className="mt-4 text-center text-slate-400">ReactJs</h1>
        </div>
        <div className="flex flex-col items-center">
          <VscGithub className="border border-2xl border-white text-8xl p-4 rounded-b-3xl " />
          <h1 className="mt-4 text-center text-slate-400">Github</h1>
        </div>
        <div className="flex flex-col items-center">
          <FaFigma className="border border-2xl border-white text-8xl p-4 rounded-b-3xl " />
          <h1 className="mt-4 text-center text-slate-400">Figma</h1>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
