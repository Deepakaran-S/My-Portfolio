import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimateOnView = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="inline-block">
      <h2 className="text-3xl justify-center items-center font-bold relative inline-block text-white">
        {text}
        <motion.span
          className="absolute left-0 -bottom-1 h-[3px] bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
          initial={{ width: 0 }}
          animate={{ width: isInView ? "100%" : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </h2>
    </div>
  );
};

export default AnimateOnView;
