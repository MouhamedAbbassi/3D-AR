import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { useGLTF } from "@react-three/drei";
import { createXRStore } from "@react-three/xr";
import { MeshStandardMaterial } from "three";
import model from "../assets/model.glb";
import * as THREE from "three";

const ARModel: React.FC = () => {
  const { scene } = useGLTF(model);

  // Ensure that materials are applied correctly
  scene.traverse((obj) => {
    if ((obj as THREE.Mesh).isMesh) {
      const mesh = obj as THREE.Mesh;
      if (mesh.material) {
        mesh.material = new MeshStandardMaterial({
          color: 0xffffff,
          metalness: 0.5,
          roughness: 0.5,
        });
      }
    }
  });

  return <primitive object={scene} scale={[0.5, 0.5, 0.5]} />;
};

const ARViewer: React.FC = () => {
  const store = useMemo(() => createXRStore(), []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
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
