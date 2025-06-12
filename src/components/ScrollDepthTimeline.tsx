import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollDepthTimeline = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 2000]);

  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const depth = Math.round(v * 1000);
      setScrollDepth(depth);
    });
  }, [scrollYProgress]);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "300vh",
        width: "100%",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #7B5133, #5A3E2B, #3B2A1A)",
      }}
    >
      {/* Depth Display */}
      <motion.div
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "bold",
          zIndex: 20,
        }}
      >
        Depth: {scrollDepth}m
      </motion.div>

      {/* Example Placeholder Object */}
      <motion.div
        style={{
          position: "absolute",
          top: "150px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontSize: "2rem",
        }}
      >
        🌱
      </motion.div>

      {/* Add scroll-triggered discoveries/fossils/gems here */}
    </div>
  );
};

export default ScrollDepthTimeline;
