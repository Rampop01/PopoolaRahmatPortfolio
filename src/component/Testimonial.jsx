import React, { useState } from "react";
import { RiSpeakLine } from "react-icons/ri";

function Testimonial() {
  const testimonialsData = [
    {
      name: "Ismail Olarewaju",
      position: "CEO of Mai Wula",
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1703978607/ismail_fohmze.jpg",
      content:
        "Congratulations techgirl. What a determined being you are. You are moving towards what you promised yourself to be. Wish you the best in tech.",
    },
    {
      name: "Salami Kadir",
      position: "TIIDELab Founder",
      image:
        "https://res.cloudinary.com/dxswouxj5/image/upload/v1703978608/mr_salami_uzn0j3.jpg",
      content:
        "Growth comes from pushing past your comfort zone👌. Weldone and continue to share your progress. You never know who is watching.",
    },
    // Add more testimonials as needed
  ];

  const itemsPerPage = 1; // Number of testimonials to show per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTestimonials = testimonialsData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="flex gap-2 border border-white p-2 px-6  m-4 h-8 rounded-full text-xs w-fit ml-1 mt-24 lg:mt-40">
        <RiSpeakLine className="mb-4 text-white mt-0.5" />
        <h1 className="text-white ">TESTIMONIAL</h1>
      </div>
      <h1 className="text-4xl mb-6 mt-6">
        What People<span className="text-[#f59e0b]"> Say</span>
      </h1>
      {currentTestimonials.map((testimonial, index) => (
        <div
          key={index}
          className="border border-white lg:p-8 mt-4 lg:w-[80%] p-4"
        >
          <div className="flex text-center gap-4 ">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src={testimonial.image}
              alt=""
            />
            <div>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-slate-400">{testimonial.position}</p>
            </div>
          </div>
          <p className="mt-4 lg:text-[18px]">"{testimonial.content}"</p>
        </div>
      ))}

      {/* Pagination */}
      <div className="mt-4 flex justify-center lg:mr-28">
        {Array.from(
          { length: Math.ceil(testimonialsData.length / itemsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 border ${
                currentPage === i + 1
                  ? "bg-[#f59e0b] text-white"
                  : "text-[#f59e0b]"
              } rounded`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Testimonial;
