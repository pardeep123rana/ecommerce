// import React from 'react'
import model from "../assets/model.png";
import { CiStar } from "react-icons/ci";
import wildcraft2 from "../assets/wildcraft two lovgo.png";

import wildcraft from "../assets/wildcraft.logo.png";

import addidas from "../assets/addidas.png";
import sho2 from "../assets/s1.png";
import bulb from "../assets/s3.png";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <div className="h-auto w-full flex md:flex-row flex-col  justify-around space-x-[3%] mt-10 p-6">
        <div className=" text-start ">
          <h1 className="md:text-4xl font-light text-3xl ">Categories</h1>
          <h1 className="mt-4xl font-light md:text-2xl text-2xl mt-2">
            Gender{" "}
          </h1>
          <h1 className="md:text-2xl font-light mt-3 text-2xl">Sale </h1>
          <h1 className="md:text-2xl  font-light mt-3 text-2xl">Product</h1>
        </div>
        <div>
          <div className="flex md:flex-row flex-col justify-around items-center  ">
            <h1 className="text-start md:text-3xl font-light text-2xl mt-2">
              All mens and womens
            </h1>
            <button className="border-2  border-spacing-1 px-3 w-[50%] text-start mt-2 py-1 ">
              fetured
            </button>
          </div>
          <div className="md:grid md:grid-cols-3  gap-x-2 mt-3 flex flex-col">
            <div className="max-h-1/2 max-w-full p-6 shadow-lg">
              <Link to="/Image">
                <img
                  className="h-auto w-full max-h-[350px] object-cover overflow-hidden "
                  src={model}
                  alt="Model"
                />
              </Link>
              <div className="p-4  text-justify">
                <h1 className="font-light">Oupidatat non</h1>
                <h1 className="font-light">M/L/X/XL</h1>
                <div className="flex justify-center items-center text-center">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div className="flex justify-center items-center text-center">
                  <h1 className="font-light">4000$</h1>
                </div>
              </div>
            </div>
            <div className="max-h-1/2 max-w-full p-6 shadow-lg">
              <div>
                <Link to="/Image">
                  <img
                    className="h-auto w-full max-h-[350px] object-cover overflow-hidden "
                    src={sho2}
                    alt="Model"
                  />
                </Link>
              </div>
              <div className="p-4  text-justify">
                <h1 className="font-light">Oupidatat non</h1>
                <h1 className="font-light">M/L/X/XL</h1>
                <div className="flex justify-center items-center text-center">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div className="flex justify-center items-center text-center">
                  <h1 className="font-light">4000$</h1>
                </div>
              </div>
            </div>
            <div className="max-h-1/2 max-w-full p-6 shadow-lg">
              <div>
                <Link to="/Image">
                  <img
                    className="h-auto w-full max-h-[350px] object-cover overflow-hidden "
                    src={bulb}
                    alt="Model"
                  />
                </Link>
              </div>
              <div className="p-4  text-justify">
                <h1 className="font-light">Oupidatat non</h1>
                <h1 className="font-light">M/L/X/XL</h1>
                <div className="flex justify-center items-center text-center">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div className="flex justify-center items-center text-center">
                  <h1 className="font-light">4000$</h1>
                </div>
              </div>
            </div>
            <div className="max-h-1/2 max-w-full p-6 shadow-lg">
              <div>
                <Link to="/Image">
                  <img
                    className="h-auto w-full max-h-[350px] object-cover overflow-hidden "
                    src={model}
                    alt="Model"
                  />
                </Link>
              </div>
              <div className="p-4  text-justify">
                <h1 className="font-light">Oupidatat non</h1>
                <h1 className="font-light">M/L/X/XL</h1>
                <div className="flex justify-center items-center text-center">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div className="flex justify-center items-center text-center">
                  <h1 className="font-light">4000$</h1>
                </div>
              </div>
            </div>
            <div className="max-h-1/2 max-w-full p-6 shadow-lg">
              <div>
                <Link to="/Image">
                  <img
                    className="h-auto w-full max-h-[350px] object-cover overflow-hidden "
                    src={sho2}
                    alt="Model"
                  />
                </Link>
              </div>
              <div className="p-4  text-justify">
                <h1 className="font-light">Oupidatat non</h1>
                <h1 className="font-light">M/L/X/XL</h1>
                <div className="flex justify-center items-center text-center">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div className="flex justify-center items-center text-center">
                  <h1 className="font-light">4000$</h1>
                </div>
              </div>
            </div>
            <div className="max-h-1/2 max-w-full p-6 shadow-lg">
              <div>
                <Link to="/Image">
                  <img
                    className="h-auto w-full max-h-[350px] object-cover overflow-hidden "
                    src={bulb}
                    alt="Model"
                  />
                </Link>
              </div>
              <div className="p-4  text-justify">
                <h1 className="font-light">Oupidatat non</h1>
                <h1 className="font-light">M/L/X/XL</h1>
                <div className="flex justify-center items-center text-center">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div className="flex justify-center items-center text-center">
                  <h1 className="font-light">4000$</h1>
                </div>
              </div>
            </div>
            <div className="max-h-1/2 max-w-full p-6 shadow-lg">
              <div>
                <Link to="/Image">
                  <img
                    className="h-auto w-full max-h-[350px] object-cover overflow-hidden "
                    src={model}
                    alt="Model"
                  />
                </Link>
              </div>
              <div className="p-4  text-justify">
                <h1 className="font-light">Oupidatat non</h1>
                <h1 className="font-light">M/L/X/XL</h1>
                <div className="flex justify-center items-center text-center">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div className="flex justify-center items-center text-center">
                  <h1 className="font-light">4000$</h1>
                </div>
              </div>
            </div>
            <div className="max-h-1/2 max-w-full p-6 shadow-lg">
              <div>
                <Link to="/Image">
                  <img
                    className="h-auto w-full max-h-[350px] object-cover overflow-hidden "
                    src={sho2}
                    alt="Model"
                  />
                </Link>
              </div>
              <div className="p-4  text-justify">
                <h1 className="font-light">Oupidatat non</h1>
                <h1 className="font-light">M/L/X/XL</h1>
                <div className="flex justify-center items-center text-center">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div className="flex justify-center items-center text-center">
                  <h1 className="font-light">4000$</h1>
                </div>
              </div>
            </div>
            <div className="max-h-1/2 max-w-full p-6 shadow-lg">
              <div>
                <Link to="/Image">
                  <img
                    className="h-auto w-full max-h-[350px] object-cover overflow-hidden "
                    src={bulb}
                    alt="Model"
                  />
                </Link>
              </div>
              <div className="p-4  text-justify">
                <h1 className="font-light">Oupidatat non</h1>
                <h1 className="font-light">M/L/X/XL</h1>
                <div className="flex justify-center items-center text-center">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div className="flex justify-center items-center text-center">
                  <h1 className="font-light">4000$</h1>
                </div>
              </div>
            </div>
            <div className="mt-3 flex justify-end text-center p-2 space-x-2">
              <div className="p-3 px-5 bg-green-600 text-2xl text-white  shadow-lg">
                1
              </div>
              <div className="p-3  px-5 hover:bg-green-600 text-black text-2xl shadow-lg  ">
                2
              </div>
              <div className="p-3 px-5 bg-white hover:bg-green-600 text-black text-2xl  shadow-lg ">
                3
              </div>
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

export default Shop;
