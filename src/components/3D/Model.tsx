// Model.tsx
import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Group } from "three";

interface ModelProps {
  url: string;
}

const Model: React.FC<ModelProps> = ({ url }) => {
  // Load the GLTF model
  const gltf = useLoader(GLTFLoader, url);

  // Create a ref for the model
  const modelRef = useRef<Group>(null);

  // If you need to perform operations on the model, you can do so here

  return (
    <group ref={modelRef}>
      <primitive object={gltf.scene} />
    </group>
  );
};

export default Model;
