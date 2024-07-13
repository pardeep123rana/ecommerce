// import React from "react";
import watch2 from "../assets/watch2.jpg";
import { CiStar } from "react-icons/ci";
import sho2 from "../assets/sho 2.jpg";
import bulb from "../assets/banner_img_03.jpg";

const Content2 = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[#F0F6FF] px-5 md:px-10 py-10 mb-7">
      <div className="text-center items-center">
        <h1 className="text-2xl md:text-4xl font-light ">Featured Product</h1>
        <h1 className="mt-2 text-base md:text-lg font-light">
          Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </h1>
        <h1 className="text-base md:text-lg font-light">
          Excepteur sint occaecat cupidatat non proident.
        </h1>
      </div>

      <div className="flex md:flex-row flex-col  mt-[5%] justify-center items-center space-y-10 md:space-y-0 md:space-x-5  ">
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 object-cover"
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
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 overflow-y-auto"
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
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 overflow-y-hidden "
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
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 overflow-y-hidden "
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
      </div>
      <div className="flex md:flex-row flex-col  mt-[2%] justify-center items-center space-y-10 md:space-y-0 md:space-x-5  ">
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 object-cover"
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
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 overflow-y-auto"
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
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 overflow-y-hidden "
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
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 overflow-y-hidden "
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
      </div>
      <div className="flex md:flex-row flex-col  mt-[2%] justify-center items-center space-y-10 md:space-y-0 md:space-x-5  ">
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 object-cover"
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
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 overflow-y-auto"
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
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 overflow-y-hidden "
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
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 overflow-y-hidden "
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
      </div>
      <div className="flex md:flex-row flex-col  mt-[2%] justify-center items-center space-y-10 md:space-y-0 md:space-x-5  ">
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 object-cover"
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
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 overflow-y-auto"
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
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 overflow-y-hidden "
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
        <div className="flex flex-col h-auto w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
          <div>
            <img
              className="w-full h-56 overflow-y-hidden "
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
      </div>
    </div>
  );
};

export default Content2;
