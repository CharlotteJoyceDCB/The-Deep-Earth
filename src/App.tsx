import MovingGrass from "./components/MovingGrass";
import MovingClouds from "./components/MovingClouds";
import ScrollDepthTimeline from "./components/ScrollDepthTimeline";

function App() {
  return (
    <div style={{ overflowX: "hidden", width: "100vw", position: "relative" }}>
      {/* Sky Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          background: "linear-gradient(to bottom, #87ceeb, #aad3e6)",
          zIndex: -1,
        }}
      />

      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <MovingClouds />
        <MovingGrass />
        <div
          style={{
            position: "absolute",
            bottom: "100px",
            width: "100%",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            🌍 Deep Earth Explorer
          </h1>
          <p>Scroll down to explore Earth’s layers</p>
        </div>
      </div>

      {/* Scroll Depth Timeline - Earth Layers Start Here */}
      <ScrollDepthTimeline />
    </div>
  );
}

export default App;
