import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { useGLTF } from "@react-three/drei";
import { createXRStore } from "@react-three/xr";
import model from "../assets/model.glb";

const ARModel: React.FC = () => {
  const { scene } = useGLTF(model);

  return <primitive object={scene} scale={[0.5, 0.5, 0.5]} />;
};

const ARViewer: React.FC = () => {
  const store = useMemo(() => createXRStore(), []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* AR Button to enter AR mode */}
      <ARButton store={store} />
      <Canvas>
        <XR store={store}>
          <ambientLight intensity={0.5} />
          <ARModel />
        </XR>
      </Canvas>
    </div>
  );
};

export default ARViewer;
