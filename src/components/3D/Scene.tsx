import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Sparkles } from "@react-three/drei";
import Model from "./Model";
import { Group } from "three";

const Scene: React.FC = () => {
  const modelRef = useRef<Group>(null);

  return (
    <div className="w-full h-full absolute">
      <Canvas style={{ width: "100%", height: "100%", display: "flex" }}>
        <PerspectiveCamera makeDefault position={[10, 20, 40]} fov={14} />
        <ambientLight intensity={1.7} color={"#f0fdfa"} />
        <Model ref={modelRef} url="/scene.gltf" position={[0, -5, 0]} />
        <Sparkles
          count={4000}
          size={25}
          speed={1}
          opacity={1}
          scale={200}
          color="#14b8a6"
        />
        <OrbitControls enableZoom={false} maxDistance={80} minDistance={80} />
      </Canvas>
    </div>
  );
};

export default Scene;

/* <PerspectiveCamera makeDefault position={[30, 40, 65]} fov={80} /> */
