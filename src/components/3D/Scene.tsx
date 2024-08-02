import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Sparkles } from "@react-three/drei";
import Model from "./Model";

const Scene: React.FC = () => {
  return (
    <div className="w-full h-full absolute">
      <Canvas style={{ width: "100%", height: "100%", display: "flex" }}>
        <PerspectiveCamera makeDefault position={[10, 20, 40]} fov={1.8} />
        <ambientLight intensity={10} color={"#f0fdfa"} />
        <Model url="/scene.gltf" position={[0, 0, 0]} />
        <Sparkles
          count={4000}
          size={25}
          speed={1}
          opacity={1}
          scale={30}
          color="#14b8a6"
        />
        <OrbitControls enableZoom={false} maxDistance={80} minDistance={80} />
      </Canvas>
    </div>
  );
};

export default Scene;

/* <PerspectiveCamera makeDefault position={[30, 40, 65]} fov={80} /> */
