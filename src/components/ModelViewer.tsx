import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import model from "../assets/model.glb";

const ModelViewer: React.FC = () => {
  const { scene } = useGLTF(model);

  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 1, 3] }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <primitive object={scene} />
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
