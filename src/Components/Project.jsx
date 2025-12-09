import React from "react";
import { projectdata } from "../api/projectdata";
import { ProjectGrid } from "./ui/ProjectGrid";
import AnimateOnView from "../Animations/AnimateOnView";

const Project = () => {
  return (
    <div id="projects">
      <div className="text-white px-20 py-0 md:py-6  flex  flex-col  gap-3 ">
     <div className='flex justify-center items-center ' >
            <AnimateOnView  text={"Projects"}/>
        </div>

        <p className="text-sm text-center">Built with code. Designed with care</p>
      </div>

      <div className="px-6 md:px-12 py-6 md:py-10">
        <ProjectGrid projects={projectdata} />
      </div>
    </div>
  );
};

export default Project;
