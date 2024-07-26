import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Model from "./Model";
import { Group } from "three";

const Scene: React.FC = () => {
  const modelRef = useRef<Group>(null);

  return (
    <div className="w-full h-full items-center overflow-hidden">
      <Canvas style={{ width: "100%", height: "100%" }}>
        <PerspectiveCamera makeDefault position={[30, 40, 65]} fov={75} />
        <ambientLight intensity={1.7} color={"#f0fdfa"} />
        <Model ref={modelRef} url="/scene.gltf" />
        <OrbitControls enableZoom={false} maxDistance={80} minDistance={80} />
      </Canvas>
    </div>
  );
};

export default Scene;

