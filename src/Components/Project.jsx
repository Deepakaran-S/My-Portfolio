import React from "react";
import { projectdata } from "../api/projectdata";
import { ProjectShowcase } from "./ui/ProjectShowcase";
import { div } from "motion/react-client";
import AnimateOnView from "../Animations/AnimateOnView";

const Project = () => {
  return (
    <div id="projects" >
      <div className="text-white px-20 py-0 md:py-6  flex  flex-col  gap-3 ">
     <div className='flex justify-center items-center ' >
            <AnimateOnView  text={"Projects"}/>
        </div>

        <p className="text-sm text-center">Built with code. Designed with care</p>
      </div>

      <div className=" px-10 md:px-0 py-4 md:py-10">
        <ProjectShowcase projects={projectdata} autoplay />
      </div>
    </div>
  );
};

export default Project;
