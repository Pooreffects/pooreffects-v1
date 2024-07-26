import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Model from "./Model";

const Scene: React.FC = () => {
  return (
    <div className="w-full h-80 items-center">
      <Canvas style={{ width: "100%", height: "100%" }}>
        <PerspectiveCamera makeDefault position={[15, 30, 65]} fov={75} />
        <Model url="/scene.gltf" />
        <OrbitControls enableZoom={false} maxDistance={80} minDistance={80} />
        <ambientLight intensity={1.7} color={"#f0fdfa"}/>
      </Canvas>
    </div>
  );
};

export default Scene;
