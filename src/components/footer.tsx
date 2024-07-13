// import React from "react";
import { MdEmail } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-800">
      <div className="auto w-full mt-2  flex md:flex-row flex-col place-content-center md:text-center text-left justify-around space-y-5 text-white p-10   ">
        <div className="md:mt-1">
          <div className="text-3xl font-bold ">
            <h1 className=" mt-4 uppercase text-green-700">ZAY </h1>
            <h1 className="text-green-700 md:b-[30%]  uppercase">shop</h1>
          </div>
          <div className=" ">
            <h1 className="">Where ZAY meets</h1>
            <h1>real-world needs.</h1>
          </div>
        </div>
        <div>
          <h1 className="md:text-2xl text-[19px] font-bold  uppercase">
            helpful links
          </h1>
          <div className="mt-3 ">
            <h1>ZAY</h1>
            <h1>Privacy policy</h1>
            <h1>REFUND &</h1>
            <h1> CANCELLATION POLICY</h1>
            <h1>TERMS & CONDITIONS</h1>
          </div>
        </div>
        <div>
          <h1 className="md:text-2xl text-[19px] font-bold">GET IN TOUCH </h1>
          <div className="mt-3 grid md:justify-center text-left">
            <div className="flex flex-row space-x-2">
              <h1 className="mt-2">
                <MdEmail />
              </h1>
              <h1>ranapradeep428@gmail.com</h1>
            </div>
            <div className="flex flex-row space-x-2">
              <h1 className="mt-2">
                <FaUniversity />
              </h1>
              <h1>login.texascollege.edu.np</h1>
            </div>

            <div className="flex flex-row space-x-2">
              <h1 className="mt-2">
                <MdEmail />
              </h1>
              <h1>ranapradeep428@gmail.com</h1>
            </div>

            <div className="flex flex-row space-x-2">
              <h1 className="mt-2">
                <MdEmail />
              </h1>
              <h1>ranapradeep428@gmail.com</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="md:text-2xl text-[19px] font-bold">
            CONNECT WITH US{" "}
          </h1>
          <div className="mt-3 grid md:justify-center text-left">
            <div className="flex flex-row space-x-2">
              <h1 className="mt-2">
                <FaFacebook />
              </h1>
              <h1>Facebook</h1>
            </div>
            <div className="flex flex-row space-x-2">
              <Link to="/about" className="flex gap-2">
                {" "}
                <h1 className="mt-2">
                  <FaYoutube />
                </h1>
                <h1>Youtube</h1>
              </Link>
            </div>

            <div className="flex flex-row space-x-2">
              <h1 className="mt-2">
                <FaGithubSquare />
              </h1>

              <h1>Github</h1>
            </div>

            <div className="flex flex-row space-x-2">
              <h1 className="mt-2">
                <FaInstagram />
              </h1>

              <h1>instagram</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="px-11 ">
        <hr />
      </div>

      <div className="flex md:justify-around p-6 flex-wrap space-y-2 px-10">
        <h1 className="text-3xl flex flex-row space-x-5 text-white items-center ">
          <MdEmail />
          <FaFacebook />
          <FaGithubSquare />
          <Link to="https://www.youtube.com/">
            <FaYoutube />
          </Link>
        </h1>
        <div className="flex border-2 rounded-sm ">
          <input
            className="flex-1 px-4  text-base border-none outline-none bg-slate-800"
            type="text"
            placeholder="Email "
          />
          <div className="p-2 bg-green-600 text-white ">
            <h1>Subscribe</h1>
          </div>
        </div>
      </div>
      <div className="h-auto w-full bg-slate-900 text-white py-7 px-20 flex justify-center">
        <h1 className="text-[19px] font-light">
          Copyright © 2024 Company Name | Designed by TemplateMo
        </h1>
      </div>
    </div>
  );
};

export default Footer;
