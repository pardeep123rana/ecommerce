// import React from 'react
import mobile from "../assets/mobile.png";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbArrowBarBoth } from "react-icons/tb";
import { FaPercentage } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import addidas from "../assets/addidas.png";
// import nike from "../assets/nike.2.jpg";
import wildcraft2 from "../assets/wildcraft two lovgo.png";

import wildcraft from "../assets/wildcraft.logo.png";

const About = () => {
  return (
    <>
      <div className="h-auto w-full flex justify-center items-center py-10 px-[10%]  bg-[#59AB6E] shadow-lg">
        <div className="flex md:flex-row flex-col-reverse space-y-4">
          <div className="place-content-center text-white">
            <h1 className="text-3xl font-semibold">About Us</h1>
            <h1 className="text-lg font-light mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h1>
          </div>
          <div>
            <img className="" src={mobile} alt="" />
          </div>
        </div>
      </div>
      <div className="h-auto w-full flex justify-center items-center text-center p-10 ">
        <div>
          <h1 className="text-3xl">Our Services</h1>
          <h1 className="text-lg font-light mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </h1>
          <h1 className="text-lg font-light">Lorem ipsum dolor sit amet. </h1>
          <div className="flex flex-col md:flex-row mt-[5%] justify-evenly md:space-x-4 space-y-4 md:space-y-5">
            <div className="py-8 px-6 md:px-12 lg:px-24 shadow-2xl hover:bg-[#59AB6E] text-[#59AB6E] hover:text-white flex flex-col justify-center items-center space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl  ">
                <CiDeliveryTruck />
              </h1>
              <h1 className="text-xl md:text-2xl font-medium text-black hover:text-white">
                Delivery Services
              </h1>
            </div>
            <div className="py-8 px-8 md:px-12 lg:px-24 shadow-2xl hover:bg-[#59AB6E] text-[#59AB6E] hover:text-white flex flex-col justify-center items-center space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl  ">
                <TbArrowBarBoth />
              </h1>
              <h1 className="text-xl md:text-2xl font-medium text-black hover:text-white">
                Shipping & Return
              </h1>
            </div>
            <div className="py-8 px-6 md:px-12 lg:px-24 shadow-2xl hover:bg-[#59AB6E] text-[#59AB6E] hover:text-white flex flex-col justify-center items-center space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl ">
                <FaPercentage />
              </h1>
              <h1 className="text-xl md:text-2xl font-medium text-black hover:text-white">
                Promotion
              </h1>
            </div>
            <div className="py-8 px-6 md:px-12 lg:px-24 shadow-2xl hover:bg-[#59AB6E] text-[#59AB6E] hover:text-white flex flex-col justify-center items-center space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl   ">
                <FaUser />
              </h1>
              <h1 className="text-xl md:text-2xl font-medium text-black hover:text-white">
                24 Hours Service
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto w-full flex flex-col justify-center bg-slate-200 items-center text-center p-10 py-16 ">
        <div>
          <h1 className="md:text-4xl text-2xl font-light ">Our Brands</h1>
          <h1 className="text-lg font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod{" "}
          </h1>
          <h1 className="text-lg font-light">Lorem ipsum dolor sit amet. </h1>
        </div>
        <div className="flex flex-row justify-evenly items-center mt-[5%]">
          <img className="max-h-15 max-w-[10%]  " src={addidas} alt="" />
          <img className="max-h-15 max-w-[10%] " src={addidas} alt="" />
          <img className="max-h-15 max-w-[10%] " src={wildcraft} alt="" />
          <img className="max-h-15 max-w-[10%] " src={wildcraft2} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
