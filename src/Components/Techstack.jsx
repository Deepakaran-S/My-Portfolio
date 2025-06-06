import React from "react";
import AnimateOnView from "../Animations/AnimateOnView";

const Techstack = () => {
  const skills = {
    Design: [
      { name: "Figma", icon: "/assets/figma.svg" },
      { name: "Adobe XD", icon: "/assets/adobe-xd.svg" },
      { name: "Photoshop", icon: "/assets/adobe-photoshop.svg" },
      { name: "Ilustratoe", icon: "/assets/adobe-illustrator.svg" },
    ],
    Development: [
      { name: "React", icon: "/assets/react.svg" },
      { name: "Node.js", icon: "/assets/Node.svg" },
      { name: "MongoDB", icon: "/assets/Mongodb.svg" },
      { name: "Tailwind CSS", icon: "/assets/tailwind-css.svg" },
      { name: "Express", icon: "/assets/Express.svg" },
    ],
    Deployment: [
      { name: "Vercel", icon: "/assets/images.png" },
      { name: "GitHub", icon: "/assets/github.svg" },
      { name: "Firebase", icon: "/assets/firebase.svg" },
    ],
  };

  return (
    <section className="py-16  " id="skills">
      <div className="max-w-6xl  mx-auto space-y-20 px-4">
        <div className="flex justify-center items-center ">
          <AnimateOnView text={"Tech Stack"} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border border-gray-700 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold justify-center items-center flex mb-10 text-white">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-white">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Techstack;
