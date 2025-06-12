import { motion } from "framer-motion";

const GrassBlade = ({ x, height, delay }: { x: number; height: number; delay: number }) => {
  const tipCurve = Math.random() * 1.5 + 0.5;
  return (
    <motion.path
      d={`M${x},150 L${x + tipCurve},${150 - height} L${x + 2},150 Z`}
      fill="green"
      animate={{ rotate: [0, 2, -2, 0] }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
      style={{
        transformOrigin: `${x + 1}px 150px`,
      }}
    />
  );
};

const MovingGrass = () => {
  const blades = Array.from({ length: 400 }, (_, i) => {
    const x = i * 2;
    const height = 40 + Math.random() * 30;
    const delay = Math.random() * 2;
    return <GrassBlade key={i} x={x} height={height} delay={delay} />;
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "150px",
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      <svg viewBox="0 0 800 150" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
        {blades}
      </svg>
    </div>
  );
};

export default MovingGrass;
