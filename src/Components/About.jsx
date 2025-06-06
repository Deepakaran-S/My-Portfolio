import { motion } from "framer-motion";
import AnimateOnView from "../Animations/AnimateOnView.jsx";
import SkillCircles from "../Animations/SkillCircles.jsx";
import { section } from "motion/react-client";

const AboutSection = () => {
  return (
    <section id="aboutme" className="py-14" >
      <div className="justify-center items-center pb-10 md:pb-16 flex" >
          <AnimateOnView text={"About Me"} />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center px-10 md:px-20 ">
      <div>  
        <p className="mt-6 text-gray-600 text-[14px] md:text-lg dark:text-neutral-300 leading-relaxed text-lg">
          Hi, I’m Deepakaran S, a full-stack developer focused on the MERN
          stack. I love building scalable web applications using MongoDB,
          Express, React, and Node.js.
          <br />
          <br />
          Along with development, I’m also passionate about UI/UX design. I aim
          to create clean, intuitive interfaces that offer a smooth user
          experience across devices.
          <br />
          <br />
          I’ve worked on a variety of projects including course platforms,
          parking solutions, and sustainable exchange apps — combining strong
          backend logic with thoughtful frontend design. I'm always looking to
          improve, build meaningful products, and stay up to date with modern
          tech.
        </p>
      </div>

      <div className="flex  justify-center items-center ">
        <SkillCircles />
      </div>
    </div>
    </section>
   
  );
};

export default AboutSection;
