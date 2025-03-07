import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Sparkles } from "@react-three/drei";
import Model from "./Model";
import { useMemo } from "react";

const Scene: React.FC = () => {
  const cameraProps = useMemo(
    () => ({
      position: [10, 20, 40] as [number, number, number],
      fov: 1.8,
      makeDefault: true,
    }),
    []
  );
  return (
    <Canvas style={{ width: "100%", height: "100%", display: "flex" }}>
      <PerspectiveCamera {...cameraProps} />
      <ambientLight intensity={10} color={"#f0fdfa"} />
      <Model url="/scene.gltf" position={[0, 0, 0]} />
      <Sparkles
        count={20}
        size={40}
        speed={1}
        opacity={1}
        scale={4}
        color="#14b8a6"
      />
      <OrbitControls enableZoom={false} maxDistance={80} minDistance={80} />
    </Canvas>
  );
};

export default Scene;
