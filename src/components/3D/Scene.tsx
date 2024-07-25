// Scene.tsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

const Scene: React.FC = () => {
  return (
    <div className="w-full h-80 items-center">
      <Canvas>
        {/* Lighting setup */}
        <perspectiveCamera
          position={[10, 10, 10]} // Adjust this vector to change camera position
          fov={75}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Model */}
        <Model url="/scene.gltf" />

        {/* Camera controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Scene;
