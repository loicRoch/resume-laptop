import { useGLTF, Float, Html } from "@react-three/drei";
import { useState } from "react";
import "./style.css";

export default function Experience() {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf",
  );

  const [userView, setUserview] = useState({
    y: -1.4,
    z: 0,
    rotationIntensity: 0.4,
  });
  const [screenProximity, setScreenProximity] = useState("far");
  const [zoom, setZoom] = useState("+");
  function handleClick() {
    if (screenProximity == "far") {
      setScreenProximity("close");
      setUserview({ y: -1.3, z: 2.4, rotationIntensity: 0 });
      setZoom("-");
    } else {
      setUserview({ y: -1.4, z: 0 });
      setScreenProximity("far");
      setZoom("+");
    }
  }

  return (
    <>
      <Float rotationIntensity={userView.rotationIntensity}>
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color={"#ff0d00b4"}
          rotation={[-0.1, Math.PI, 0]}
          position={[0, 0.55, -1.15]}
        />

        <primitive
          object={computer.scene}
          position-y={userView.y}
          position-z={userView.z}
          rotation-x={0.13}
        >
          <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
          >
            <iframe src="indexResume.html" />
            <p className="zoomId" onClick={handleClick}>
              {zoom}
            </p>
          </Html>
        </primitive>
      </Float>
    </>
  );
}
