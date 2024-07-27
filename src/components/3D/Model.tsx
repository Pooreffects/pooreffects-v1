import { forwardRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Group } from "three";

interface ModelProps {
  url: string;
  position: [number, number, number];
}

const Model = forwardRef<Group, ModelProps>(
  ({ url, position = [0, 0, 0] }, ref: any) => {
    const gltf = useLoader(GLTFLoader, url);
    const [rotationDirection, setRotationDirection] = useState(1); // 1 for clockwise, -1 for counter-clockwise
    const rotationLimit = 0.349; // 20 degrees in radians

    useEffect(() => {
      const handleRotation = () => {
        if (ref.current) {
          if (ref.current.rotation.y >= rotationLimit) {
            setRotationDirection(-1);
          } else if (ref.current.rotation.y <= -rotationLimit) {
            setRotationDirection(1);
          }
        }
      };

      const interval = setInterval(handleRotation, 100); // Check rotation direction every 100ms
      return () => clearInterval(interval);
    }, [ref]);

    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.y += 0.002 * rotationDirection; // Adjust the speed of rotation here
      }
    });

    return (
      <group ref={ref} position={position}>
        <primitive object={gltf.scene} />
      </group>
    );
  }
);

export default Model;
