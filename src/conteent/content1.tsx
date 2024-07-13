// import React from "react";
import googli from "../assets/googli.jpg";
import sho2 from "../assets/sho 2.jpg";
import watch from "../assets/watch.jpg";

const Content1 = () => {
  return (
    <div className="flex flex-col h-auto w-full py-10 justify-center items-center text-center bg-white ">
      <div>
        <h1 className="text-3xl md:text-4xl font-light">
          Categories of The Month
        </h1>
        <div className="mt-5">
          <h1 className="text-lg md:text-xl font-light">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia
          </h1>
          <h1 className="text-lg md:text-xl font-light">
            deserunt mollit anim id est laborum.
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-10 md:px-5 px-5 justify-center  space-y-10 md:space-y-0 md:space-x-10">
        <div className="w-full flex flex-col items-center space-y-4">
          <img
            className="rounded-full h-48 md:h-64 object-cover"
            src={googli}
            alt="Googli"
          />
          <h1 className="text-xl md:text-2xl">Watches</h1>
          <button className="transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 rounded-sm px-4 py-2 text-white">
            Go Shop
          </button>
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <img
            className="rounded-full h-48 md:h-64 object-cover"
            src={sho2}
            alt="Shoes"
          />
          <h1 className="text-xl md:text-2xl">Shoes</h1>
          <button className="transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 rounded-sm px-4 py-2 text-white">
            Go Shop
          </button>
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <img
            className="rounded-full h-48 md:h-64 object-cover"
            src={watch}
            alt="Accessories"
          />
          <h1 className="text-xl md:text-2xl">Accessories</h1>
          <button className="transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 rounded-sm px-4 py-2 text-white">
            Go Shop
          </button>
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <img
            className="rounded-full h-48 md:h-64 object-cover"
            src={watch}
            alt="Accessories"
          />
          <h1 className="text-xl md:text-2xl">Accessories</h1>
          <button className="transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 rounded-sm px-4 py-2 text-white">
            Go Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content1;
