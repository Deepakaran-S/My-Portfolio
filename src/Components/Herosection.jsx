import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { Typewriter } from "react-simple-typewriter";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Link } from "react-scroll";

const Herosection = () => {
  return (
    <div id="home" className="relative z-10">
      <div className="flex items-center mx-auto justify-center h-screen relative z-10">
        <div className="text-center space-y-4 ">
          <h3 className=" text-2xl  md:text-6xl ">
            Hi, I am Deepakaran S <br />
          </h3>
          <h1 className=" px-2 text-2xl md:text-5xl font-bold leading-[1.5] bg-gradient-to-r from-purple-500  via-violet-500 to-pink-500 bg-clip-text text-transparent">
            MERN Stack Developer & UI/UX Designer
          </h1>
          <p className="text-[10px] md:text-lg px-4 " >
            I craft robust web applications with a solid tech stack and a strong
            sense of design — bridging development and user experience.
          </p>

          <div className="flex gap-4 justify-center items-center py-4">
            <Link to="contact" smooth={true} duration={500}>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="md:px-8 px-4 py-1 md:py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Hire Me
              </div>
            </button> </Link>
            <a href="https://drive.google.com/file/d/18NYnHzIXFncJxJhn8H_uptWbwUKoBY4r/view?usp=sharing">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="md:px-8 px-4 py-1 md:py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Download CV
              </div>
            </button>
            </a>
          </div>
        </div>
        
      </div>
      
      

      <div className="absolute inset-0 z-0">
        
                <BackgroundBeamsWithCollision />
      </div>
    </div>
  );
};

export default Herosection;
