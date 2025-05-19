import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { useGLTF } from "@react-three/drei";
import model from "../assets/model.glb";
import * as THREE from "three";

const ARModel: React.FC = () => {
  const { scene } = useGLTF(model);

  // Apply a basic material to ensure visibility
  scene.traverse((obj) => {
    if ((obj as THREE.Mesh).isMesh) {
      const mesh = obj as THREE.Mesh;
      if (mesh.material) {
        mesh.material = new THREE.MeshStandardMaterial({
          color: 0xaaaaaa,
          metalness: 0.5,
          roughness: 0.5,
        });
      }
    }
  });

  return <primitive object={scene} scale={[0.5, 0.5, 0.5]} />;
};

const ARViewer: React.FC = () => {
  // Create the XR store
  const store = useMemo(() => createXRStore(), []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
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
