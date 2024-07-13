import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles for the carousel
import light from "../assets/banner_img_03.jpg";
import sho from "../assets/sho.jpg";
import bottle from "../assets/banner_img_02.jpg";
import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["  Repr C voluptate    Ullamco laboris nisi "],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000
  });

  return (
    <div className="h-auto w-full px-7 py-[2%] bg-[#EFEFEF] ">
      {" "}
      {/* Adjusted the top margin */}
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div className="h-auto flex flex-col-reverse md:flex-row items-center justify-center sm:flex-col-reverse pl-[7%] mt-4">
          <div className="md:text-left px-4 md:w-1/2 text-center items-center mt-7">
            <h1 className="text-3xl md:text-4xl md:font-bold font-light mb-4">
              {text}
            </h1>

            <div className="md:text-left">
              <p className="text-lg md:text-xl mb-2">
                We bring you 100% free CSS templates for your websites. If you
                wish to support TemplateMo, please make a small contribution via
                PayPal or tell your friends about our website. Thank you
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <img
              className="md:h-[600px] h-[200px] md:w-full w-225  bject-cover"
              src={light}
              alt="Bottle"
            />
          </div>
        </div>
        <div className="h-auto flex flex-col-reverse md:flex-row items-center justify-center sm:flex-col-reverse">
          <div className="md:text-left px-4 md:w-1/2 text-center items-center mt-7">
            <h1 className="text-3xl md:text-4xl md:font-bold font-light mb-4 text-green-600">
              Tiny and Perfect eCommerce Template
            </h1>
            <h1 className="text-3xl md:text-4xl md:font-bold font-light mb-4">
              Ullamco laboris nisi ut
            </h1>
            <div className="md:text-left">
              <p className="text-lg md:text-xl mb-2">
                Zay Shop is an eCommerce HTML5 CSS template with latest version
                of Bootstrap 5 (beta 1). This template is{" "}
                <span className="line-through text-green-600">100% </span>free
                provided by TemplateMo website.{" "}
                <span className="text-green-600">Image </span>credits go to
                Freepik Stories,{" "}
                <span className="underline text-green-600">Unsplash</span> and
                Icons 8.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="md:h-[550px] h-[300px] w-full object-cover"
              src={sho}
              alt="Shoe"
            />
          </div>
        </div>
        <div className="h-auto flex flex-col-reverse md:flex-row items-center justify-center sm:flex-col-reverse pl-[7%]">
          <div className="md:text-left px-4 md:w-1/2 text-center items-center mt-7">
            <h1 className="text-3xl md:text-4xl md:font-bold font-light mb-4">
              Repr in voluptate
            </h1>
            <h1 className="text-3xl md:text-4xl md:font-bold font-light mb-4">
              Ullamco laboris nisi ut
            </h1>
            <div className="md:text-left">
              <p className="text-lg md:text-xl mb-2">
                We bring you 100% free CSS templates for your websites. If you
                wish to support TemplateMo, please make a small contribution via
                PayPal or tell your friends about our website. Thank you
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="md:h-[600px] h-[300px] w-full object-cover"
              src={bottle}
              alt="Bottle"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
