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
import { Link } from "react-scroll";

function Sidebar() {
  return (
    <div className="">
      <div className="lg:border lg:border-2 lg:border-[#f59e0b] lg:rounded-full  lg:border-t-none flex gap-4 lg:w-4 lg:p-4 p-4 lg:pl-4 pl-0 bg-black  fixed bottom-0  lg:bottom-24 lg:right-4 lg:flex-col items-center justify-center w-[100%] pr-28">
        <Link
          smooth={true}
          offset={50}
          duration={500}
          className="tooltip"
          title="Home"
        >
          <IoHomeOutline className="" />
        </Link>

        <Link
          to="about"
          smooth={true}
          offset={50}
          duration={500}
          className="tooltip"
          title="About"
        >
          <FaRegUser className=" text-white" />
        </Link>

        <Link
          to="education"
          smooth={true}
          offset={50}
          duration={500}
          className="tooltip"
          title="Certification"
        >
          <IoSchoolOutline className=" text-white" />
        </Link>

        <Link
          to="service"
          smooth={true}
          offset={50}
          duration={500}
          className="tooltip"
          title="Services"
        >
          <GrServices className="text-white" />
        </Link>

        <Link
          to="skill"
          smooth={true}
          offset={50}
          duration={500}
          className="tooltip"
          title="Skills"
        >
          <GiSkills className=" text-white" />
        </Link>

        <Link
          to="project"
          smooth={true}
          offset={50}
          duration={500}
          className="tooltip"
          title="Projects"
        >
          <FaProjectDiagram className=" text-white" />
        </Link>

        <Link
          to="testimonial"
          smooth={true}
          offset={50}
          duration={500}
          className="tooltip"
          title="Testimonial"
        >
          <RiSpeakLine className=" text-white" />
        </Link>

        <Link
          to="contact"
          smooth={true}
          offset={50}
          duration={500}
          className="tooltip"
          title="Contact"
        >
          <MdOutlineContactMail className=" text-white hidden lg:flex" />
        </Link>

        <Link
          to="root"
          smooth={true}
          offset={50}
          duration={500}
          className="tooltip"
          title="Scroll to Top"
        >
          <FaRegArrowAltCircleUp className="text-white " />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
