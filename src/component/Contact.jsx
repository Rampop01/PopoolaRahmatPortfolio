import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { MdOutlineContactMail } from "react-icons/md";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields.",
        icon: "error",
        confirmButtonColor: "#f59e0b",
      });
      return; // Exit the function if any field is empty
    }

    emailjs
      .sendForm(
        "service_r1cti9j",
        "template_bx38xro",
        form.current,
        "iW-c7jNINgutvbSkn"
      )
      .then(
        (result) => {
          console.log(result.text);
          alertUser(); // Call alertUser only after a successful email send
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again.",
            icon: "error",
            confirmButtonColor: "#f59e0b",
          });
        }
      );
  };

  const alertUser = () => {
    localStorage.setItem("key", "data");
    Swal.fire({
      title: "Successful",
      text: "Message sent... Check Email For Response",
      color: "#f59e0b",
      confirmButtonColor: "#f59e0b",
      icon: "success",
    });
  };

  return (
    <div className="mb-[4rem]" id="contact">
      <div className="flex gap-2 border border-white p-2 px-6 m-4 h-8 rounded-full text-xs w-fit ml-1 mt-24 lg:mt-40">
        <MdOutlineContactMail className="mb-4 text-white mt-0.5" />
        <h1 className="text-white">CONTACT</h1>
      </div>
      <h1 className="text-4xl mb-6 mt-6">
        Get In
        <span className="text-[#f59e0b]"> Touch</span>
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col mt-2 gap-4 w-[100%] md:w-1/2 lg:w-[80%] items-center justify-center"
      >
        <div className="flex gap-2 lg:w-[100%]">
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Enter your name"
            className="p-3 h-[40px] w-[50%] lg:w-[100%] bg-[#FFFFFF] rounded-md border-2 border-[#343D68] focus:shadow-none focus:outline-none focus:border-2 focus:border-[#f59e0b] focus:bg-white"
            required
          />
          <input
            type="text"
            id="email"
            name="user_email"
            placeholder="Enter email address"
            className="p-3 h-[40px] w-[50%] lg:w-[100%] bg-[#FFFFFF] rounded-md border-2 border-[#343D68] focus:shadow-none focus:outline-none focus:border-2 focus:border-[#f59e0b] focus:bg-white"
            required
          />
        </div>
        <textarea
          id="message"
          name="message"
          placeholder="write your message"
          className="w-[100%] h-[140px] p-3 bg-[#FFFFFF] rounded-md border-2 border-[#343D68] focus:shadow-none focus:outline-none focus:border-2 focus:border-[#f59e0b] focus:bg-white"
          required
        />
        <input
          type="submit"
          value="Send"
          className="text-black font-bold rounded-md bg-[#f59e0b] w-[100%] h-[40px] flex justify-center items-center gap-2 hover:bg-[#fef9c3] duration-500 mb-2"
        />
      </form>
    </div>
  );
};

export default ContactForm;
