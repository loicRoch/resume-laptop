import { Canvas } from "@react-three/fiber";
import {
  PresentationControls,
  GizmoHelper,
  GizmoViewport,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import "./App.css";
import Experience from "./Experience.jsx";
import "./style.css";

function App() {
  return (
    <div id="canvas-container">
      <Canvas
        className="laptopDisplay"
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [0, 1, 4],
        }}
      >
        <axesHelper args={[10]} />
        <gridHelper args={[20, 20]} />
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport />
        </GizmoHelper>
        <color args={["#241a1a"]} attach="background" />
        <Environment preset="studio" />
        <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
        <PresentationControls
          global
          rotation={[0.1, 0,0]}
          polar={[0, 0.2]}
          azimuth={[-1, 0.75]}
          damping={0.20}
          config={{ mass: 2, tension: 400 }}
          snap
        >
          <Experience />
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
