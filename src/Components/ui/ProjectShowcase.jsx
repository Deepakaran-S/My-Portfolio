"use client";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const ProjectShowcase = ({ projects, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-14 font-sans md:border rounded-3xl shadow-xl border-gray-300 dark:border-neutral-800 antialiased">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-28">
        {/* Layered Image Section */}
        <div className="relative w-[250px] sm:w-[280px] md:w-[300px] h-[300px] sm:h-[340px] md:h-[360px] flex-shrink-0">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.src}
                initial={{ opacity: 0, scale: 0.9, rotate: randomRotateY() }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.4,
                  scale: isActive(index) ? 1 : 0.95,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 30 : 10,
                  y: isActive(index) ? 0 : (index - active) * 10,
                }}
                exit={{ opacity: 0, scale: 0.9, rotate: randomRotateY() }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 origin-bottom overflow-hidden rounded-3xl shadow-xl"
                style={{
                  transform: `translate(${(index - active) * 10}px, ${
                    (index - active) * 10
                  }px)`,
                }}
              >
                <div className="h-full w-full rounded-3xl overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={project.src}
                    alt={project.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="object-contain max-h-full rounded-3xl max-w-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div className="w-full md:max-w-xl text-center md:text-left space-y-6 px-2 md:px-0">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {projects[active].name}
            </h3>

            {/* Action Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
              {projects[active].github && (
                <a
                  href={projects[active].github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithub className="w-5 h-5 text-black dark:text-white" />
                </a>
              )}
              {projects[active].live && (
                <a
                  href={projects[active].live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconExternalLink className="w-5 h-5 text-black dark:text-white" />
                </a>
              )}

              {/* Tech stack icons */}
              {projects[active].techStack?.map((tech, idx) => (
                <img
                  key={idx}
                  src={tech}
                  alt={`Tech ${idx}`}
                  className="w-5 h-5 object-contain"
                />
              ))}
            </div>

            <motion.p className="text-sm md:text-lg text-gray-600 dark:text-neutral-300 pt-4">
              {projects[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.015 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-200 dark:bg-neutral-800"
            >
              <IconArrowLeft className="w-5 h-5 text-black dark:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-200 dark:bg-neutral-800"
            >
              <IconArrowRight className="w-5 h-5 text-black dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
