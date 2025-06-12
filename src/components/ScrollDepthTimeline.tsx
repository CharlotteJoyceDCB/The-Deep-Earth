import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Earth layer colors (dark → darker → molten)
const depthColors = [
  { depth: 0, color: "#5A3E2B" },      // Surface dark brown
  { depth: 1609, color: "#4B2E14" },   // Deeper brown
  { depth: 3218, color: "#3E1F0D" },   // Iron-rich soil
  { depth: 4827, color: "#2B2B2B" },   // Charcoal
  { depth: 6436, color: "#1F1C18" },   // Basalt
  { depth: 8045, color: "#1A1A1A" },   // Denser rock
  { depth: 9654, color: "#141414" },   // Near mantle
  { depth: 11263, color: "#0F0F0F" },  // Mantle
  { depth: 12872, color: "#0B0B0B" },  // Core boundary
  { depth: 14481, color: "#050505" },  // Inner core
  { depth: 16090, color: "#330000" },  // Blackened red (molten core)
];

const colorStops = depthColors.map((_, i) => i / (depthColors.length - 1));
const colorValues = depthColors.map((d) => d.color);

const ScrollDepthTimeline = () => {
  const { scrollYProgress } = useScroll();
  const [scrollDepth, setScrollDepth] = useState(0);

  const totalDepth = 16090; // meters
  const pixelsPerMeter = 10; // make scrolling more realistic
  const scrollHeight = `${totalDepth * pixelsPerMeter}px`;

  const background = useTransform(scrollYProgress, colorStops, colorValues);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const depth = Math.round(v * totalDepth);
      setScrollDepth(depth);
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      style={{
        position: "relative",
        minHeight: scrollHeight,
        width: "100%",
        overflow: "hidden",
        backgroundColor: background,
        transition: "background-color 0.4s linear",
      }}
    >
      {/* Depth Counter */}
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
        Depth: {scrollDepth.toLocaleString()}m
      </motion.div>

      {/* Mist Overlay */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background:
            "radial-gradient(ellipse at top, rgba(255,255,255,0.08), transparent 70%)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Sample Object at 150m */}
      <motion.div
        style={{
          position: "absolute",
          top: `${150 * pixelsPerMeter}px`,
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontSize: "2rem",
        }}
      >
        🌱
      </motion.div>
    </motion.div>
  );
};

export default ScrollDepthTimeline;
