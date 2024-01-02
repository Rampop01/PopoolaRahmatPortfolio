// import React from "react";
// import { IoHomeOutline } from "react-icons/io5";
// import { FaRegUser } from "react-icons/fa";
// import { IoSchoolOutline } from "react-icons/io5";
// import { GrServices } from "react-icons/gr";
// import { GiSkills } from "react-icons/gi";
// import { RiSpeakLine } from "react-icons/ri";
// import { MdOutlineContactMail } from "react-icons/md";
// import { FaRegArrowAltCircleUp } from "react-icons/fa";
// import { FaProjectDiagram } from "react-icons/fa";
// import { Tooltip } from "react-tooltip";

// function Sidebar() {
//   return (
//     <div className="border border-2 border-solid border-[#f59e0b] rounded-full border my-40 mx-8 w-4 p-8 pl-4 fixed right-0">
//       <button title="Home">
//         <IoHomeOutline className="mb-4" />
//       </button>

//       <button title="About">
//         <FaRegUser className="mb-4 text-white" />
//       </button>

//       <button title="Certification">
//         <IoSchoolOutline className="mb-4 text-white" />
//       </button>
//       <button title="Services">
//         <GrServices className="mb-4 text-white" />
//       </button>
//       <button title="Skills">
//         <GiSkills className="mb-4 text-white" />
//       </button>
//       <button title="Projects">
//         <FaProjectDiagram className="mb-4 text-white" />
//       </button>
//       <button title="Testimonial">
//         <RiSpeakLine className="mb-4 text-white" />
//       </button>
//       <button title="Contact">
//         <MdOutlineContactMail className="mb-4 text-white" />
//       </button>
//       <FaRegArrowAltCircleUp className=" text-white" />
//     </div>
//   );
// }

// export default Sidebar;
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { RiSpeakLine } from "react-icons/ri";
import { MdOutlineContactMail } from "react-icons/md";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="lg:border lg:border-2 lg:border-[#f59e0b] lg:rounded-full flex gap-4 lg:gap-2  lg:w-4 p-8  lg:pl-4 pl-0  lg:fixed bottom-24 lg:right-4 lg:flex-col items-center justify-center">
      <button className="tooltip" title="Home">
        <IoHomeOutline className="lg:mb-2" />
      </button>

      <button to="about" className="tooltip" title="About">
        <FaRegUser className="lg:mb-2 text-white" />
      </button>

      <button className="tooltip" title="Certification">
        <IoSchoolOutline className="lg:mb-2 text-white" />
      </button>

      <button className="tooltip" title="Services">
        <GrServices className="lg:mb-2 text-white" />
      </button>

      <button className="tooltip" title="Skills">
        <GiSkills className="lg:mb-2 text-white" />
      </button>

      <button className="tooltip" title="Projects">
        <FaProjectDiagram className="lg:mb-2 text-white" />
      </button>

      <button className="tooltip" title="Testimonial">
        <RiSpeakLine className="lg:mb-2 text-white" />
      </button>

      <button className="tooltip" title="Contact">
        <MdOutlineContactMail className="lg:mb-2 text-white" />
      </button>

      <button className="tooltip" title="Scroll to Top">
        <FaRegArrowAltCircleUp className="text-white lg:mb-2" />
      </button>
    </div>
  );
}

export default Sidebar;
