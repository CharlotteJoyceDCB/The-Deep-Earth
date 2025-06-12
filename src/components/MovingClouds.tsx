import { motion } from "framer-motion";

const cloudConfigs = [
  { id: "cloud1", top: "10%", left: "5%", size: 100, opacity: 0.7, duration: 60, delay: 0 },
  { id: "cloud2", top: "20%", left: "20%", size: 80, opacity: 0.5, duration: 50, delay: 5 },
  { id: "cloud3", top: "30%", left: "40%", size: 120, opacity: 0.6, duration: 70, delay: 10 },
  { id: "cloud4", top: "15%", left: "60%", size: 90, opacity: 0.4, duration: 65, delay: 3 },
  { id: "cloud5", top: "25%", left: "80%", size: 110, opacity: 0.55, duration: 75, delay: 8 },
];

const CloudSVG = ({ size }: { size: number }) => (
  <svg width={size} height={size * 0.5} viewBox="0 0 64 32" fill="none">
    <ellipse cx="16" cy="16" rx="16" ry="10" fill="#fff" />
    <ellipse cx="32" cy="14" rx="14" ry="9" fill="#fff" />
    <ellipse cx="48" cy="16" rx="10" ry="7" fill="#fff" />
  </svg>
);

const MovingClouds = () => {
  return (
    <>
      {cloudConfigs.map((cloud) => (
        <motion.div
          key={cloud.id}
          animate={{ x: ["0%", "120%"] }}
          transition={{
            repeat: Infinity,
            duration: cloud.duration,
            ease: "linear",
            delay: cloud.delay,
          }}
          style={{
            position: "absolute",
            top: cloud.top,
            left: cloud.left,
            zIndex: 3,
            opacity: cloud.opacity,
            pointerEvents: "none",
          }}
        >
          <CloudSVG size={cloud.size} />
        </motion.div>
      ))}
    </>
  );
};

export default MovingClouds;
