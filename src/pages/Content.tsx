// import React from "react";
import location from "../assets/my location.png";

const Content = () => {
  return (
    <>
      <div className="h-auto w-full flex flex-col justify-center items-center text-center p-7">
        <div>
          <h1 className="md:text-4xl text-2xl font-light">Contact Us</h1>
          <p className="text-lg font-light mt-4">
            Proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="h-auto w-full flex justify-center items-center text-center p-7">
        <img src={location} alt="Location" className="max-w-full h-auto" />
      </div>
      <div className="h-auto w-full p-7 grid gap-6">
        <div className="flex flex-col md:flex-row justify-around w-full space-y-4 md:space-y-0">
          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-lg font-light">Name</h1>
            <input
              className="border-2 border-gray-400 w-full md:w-1/2 py-2 px-3 mt-2"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-lg font-light">Email</h1>
            <input
              className="border-2 border-gray-400 w-full md:w-1/2 py-2 px-3 mt-2"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-light">Subject</h1>
          <input
            className="border-2 border-gray-400 w-full md:w-1/3 py-2 px-3 mt-2"
            type="text"
            placeholder="Subject"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-light">Message</h1>
          <textarea
            className="border-2 border-gray-400 w-full md:w-2/3 py-2 px-3 mt-2 h-32"
            placeholder="Message"
          />
        </div>
      </div>
    </>
  );
};

export default Content;
