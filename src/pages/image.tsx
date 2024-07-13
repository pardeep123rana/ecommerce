// import React from 'r
import yoga from "../assets/yoga.jpg";
import { CiStar } from "react-icons/ci";
import watch2 from "../assets/s2.png";
// import { CiStar } from "react-icons/ci";
import sho2 from "../assets/s1.png";
import bulb from "../assets/s3.png";
import model from "../assets/model.png";
import { Carousel } from "react-responsive-carousel";
import yoga1 from "../assets/yoga1.jpg";
import yoga2 from "../assets/yogap2.jpg";
import yoga3 from "../assets/yogap.3.jpg";

const Image = () => {
  return (
    <>
      <div className="min-h-screen w-screen bg-slate-200 flex justify-center items-center px-2 py-20">
        <div className="flex flex-col md:flex-row justify-center md:space-x-7 space-y-5 md:space-y-0 w-full max-w-7xl  ">
          <div className="bg-white h-1/1 md:w-full ">
            <img className="w-full  " src={yoga} alt="Yoga" />
            <div className="flex flex-row justify-start space-x-4">
              <img className="h-1/2 w-1/2" src={yoga1} alt="" />
              <img className="h-1/2 w-1/2" src={yoga2} alt="" />
              <img className="h-1/2 w-1/2" src={yoga3} alt="" />
            </div>
          </div>

          <div className="bg-white h-full md:w-1/1 p-4">
            <h1 className="text-3xl font-light">Active Wear</h1>
            <h1 className="text-2xl font-light mt-3">$25.00</h1>
            <div className="flex flex-col mt-3 space-y-2">
              <div className="flex flex-row">
                <CiStar className="text-yellow-500 text-2xl" />
                <CiStar className="text-yellow-500 text-2xl" />
                <CiStar className="text-yellow-500 text-2xl" />
                <CiStar className="text-gray-300 text-2xl" />
                <CiStar className="text-gray-300 text-2xl" />
              </div>
              <h1 className="text-2xl font-light">Rating 4.8 | 36 Comments</h1>
            </div>
            <h1 className="mt-4 font-bold">
              Brand: <span className="text-gray-500 font-light">Easy Wear</span>
            </h1>
            <h1 className="mt-2 font-bold">Description:</h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temp incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed
              orci a diam ultrices aliquet interdum quis nulla.
            </p>
            <h1 className="mt-4 font-bold">
              Available:
              <span className="font-light text-gray-500">
                Color: White / Black
              </span>
            </h1>
            <h1 className="mt-4 font-bold">Specification:</h1>

            <div className="mt-4">
              <h1>Lorem ipsum dolor sit</h1>
              <h1>Amet, consectetur</h1>
              <h1>Adipiscing elit, set</h1>
              <h1>Duis aute irure</h1>
              <h1>Ut enim ad minim</h1>
              <h1>Dolore magna aliqua</h1>
              <h1>Excepteur sint</h1>
            </div>
            <div className="flex justify-start mt-3 space-x-4">
              <div className="flex flex-row space-x-2 ">
                <h1 className="text-1xl font-light">Size :</h1>
                <button className="bg-[#59AB6E] text-white py-1 px-4 rounded-md ">
                  S
                </button>
                <button className="bg-[#59AB6E] text-white py-1 px-4 rounded-md ">
                  M
                </button>
                <button className="bg-[#59AB6E] text-white py-1 px-4 rounded-md">
                  L
                </button>
                <button className="bg-[#59AB6E] text-white py-1 px-4 rounded-md ">
                  XL
                </button>
              </div>
              <div className="flex flex-row space-x-2 ">
                <h1 className="text-1xl font-light">Quantity :</h1>
                <button className="bg-[#59AB6E] text-white py-1 px-4 rounded-md ">
                  +
                </button>
                <button className="bg-[#59AB6E] text-white py-1 px-4 rounded-md ">
                  1
                </button>
                <button className="bg-[#59AB6E] text-white py-1 px-4 rounded-md ">
                  -
                </button>
              </div>
            </div>

            <div className="flex  justify-stretch space-x-5 items-center text-center mt-6">
              <button className="py-2 px-6 text-center bg-[#59AB6E] text-white rounded-lg text-lg w-1/2">
                Buy{" "}
              </button>
              <button className="py-2 px-6 text-center bg-[#59AB6E] text-white rounded-lg text-lg w-1/2 ">
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col space-y-0">
        <Carousel showThumbs={false} autoPlay infiniteLoop></Carousel>
        {/* <h1 className="text-3xl font-medium p-3 pl-6">Related products</h1> */}
        <Carousel showThumbs={false} autoPlay infiniteLoop></Carousel>
        <div className="flex md:flex-row flex-col  mt-[5%] justify-center items-center space-y-10 md:space-y-0 md:space-x-5 p-5 ">
          <div className="flex flex-col h-auto w-full md:w-1/5 bg-white shadow-md rounded-lg overflow-hidden">
            <div>
              <img
                className="w-full h-80 overflow-y-auto "
                src={watch2}
                alt="Watch"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div>$25000</div>
              </div>
              <div className="mt-3">
                <h1 className="text-2xl font-extralight">Gym Weight</h1>
                <p className="font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  in culpa qui officia deserunt.
                </p>
                <h1 className="mt-4 text-gray-500">Reviews (24)</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-auto w-full md:w-1/5 bg-white shadow-md rounded-lg overflow-hidden">
            <div>
              <img
                className="w-full h-80 overflow-y-auto"
                src={bulb}
                alt="Bulb"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div>$25000</div>
              </div>
              <div className="mt-3">
                <h1 className="text-2xl font-extralight">Gym Weight</h1>
                <p className="font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  in culpa qui officia deserunt.
                </p>
                <h1 className="mt-4 text-gray-500">Reviews (24)</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-auto w-full md:w-1/5 bg-white shadow-md rounded-lg overflow-hidden">
            <div>
              <img
                className="w-full h-80 overflow-y-hidden "
                src={sho2}
                alt="Shoes"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div>$25000</div>
              </div>
              <div className="mt-3">
                <h1 className="text-2xl font-extralight">Gym Weight</h1>
                <p className="font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  in culpa qui officia deserunt.
                </p>
                <h1 className="mt-4 text-gray-500">Reviews (24)</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-auto w-full md:w-1/5 bg-white shadow-md rounded-lg overflow-hidden">
            <div>
              <img
                className="w-full h-80 overflow-y-hidden "
                src={model}
                alt="Shoes"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div>$25000</div>
              </div>
              <div className="mt-3">
                <h1 className="text-2xl font-extralight">Gym Weight</h1>
                <p className="font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  in culpa qui officia deserunt.
                </p>
                <h1 className="mt-4 text-gray-500">Reviews (24)</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col  mt-[5%] justify-center items-center space-y-10 md:space-y-0 md:space-x-5 p-5 ">
          <div className="flex flex-col h-auto w-full md:w-1/5 bg-white shadow-md rounded-lg overflow-hidden">
            <div>
              <img
                className="w-full h-80 overflow-y-auto "
                src={watch2}
                alt="Watch"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div>$25000</div>
              </div>
              <div className="mt-3">
                <h1 className="text-2xl font-extralight">Gym Weight</h1>
                <p className="font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  in culpa qui officia deserunt.
                </p>
                <h1 className="mt-4 text-gray-500">Reviews (24)</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-auto w-full md:w-1/5 bg-white shadow-md rounded-lg overflow-hidden">
            <div>
              <img
                className="w-full h-80 overflow-y-auto"
                src={bulb}
                alt="Bulb"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div>$25000</div>
              </div>
              <div className="mt-3">
                <h1 className="text-2xl font-extralight">Gym Weight</h1>
                <p className="font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  in culpa qui officia deserunt.
                </p>
                <h1 className="mt-4 text-gray-500">Reviews (24)</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-auto w-full md:w-1/5 bg-white shadow-md rounded-lg overflow-hidden">
            <div>
              <img
                className="w-full h-80 overflow-y-hidden "
                src={sho2}
                alt="Shoes"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div>$25000</div>
              </div>
              <div className="mt-3">
                <h1 className="text-2xl font-extralight">Gym Weight</h1>
                <p className="font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  in culpa qui officia deserunt.
                </p>
                <h1 className="mt-4 text-gray-500">Reviews (24)</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-auto w-full md:w-1/5 bg-white shadow-md rounded-lg overflow-hidden">
            <div>
              <img
                className="w-full h-80 overflow-y-hidden "
                src={model}
                alt="Shoes"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-yellow-500 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                  <CiStar className="text-gray-300 text-2xl" />
                </div>
                <div>$25000</div>
              </div>
              <div className="mt-3">
                <h1 className="text-2xl font-extralight">Gym Weight</h1>
                <p className="font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  in culpa qui officia deserunt.
                </p>
                <h1 className="mt-4 text-gray-500">Reviews (24)</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </>
  );
};

export default Image;
