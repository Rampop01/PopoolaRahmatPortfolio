import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import EducationTimeLine from "./EducationTimeLime";
import Eduline from "./Eduline";

function Education() {
  return (
    <div>
      <div>
        <div className="flex gap-2 border border-white p-2 px-6  m-4 h-8 rounded-full text-xs w-fit ml-1 mt-40">
          <IoSchoolOutline className="mb-4 text-white mt-0.5" />
          <h1 className="text-white">CERTIFICATION</h1>
        </div>
        <h1 className="text-4xl mb-6 mt-6">
          Education &<span className="text-[#f59e0b]"> Certification</span>
        </h1>
        <EducationTimeLine />
      </div>
    </div>
  );
}

export default Education;
