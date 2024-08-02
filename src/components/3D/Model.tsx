import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Group } from "three";

interface ModelProps {
  url: string;
  position?: [number, number, number];
}

const Model = React.memo(({ url, position = [0, 0, 0] }: ModelProps) => {
  const modelRef = useRef<Group>(null);

  // Memoize the GLTF loader result to avoid reloading the model unless the URL changes
  const gltf = useMemo(() => useLoader(GLTFLoader, url), [url]);

  const [rotationDirection, setRotationDirection] = useState(1); // 1 for clockwise, -1 for counter-clockwise
  const rotationLimit = 0.349; // 20 degrees in radians

  // Memoize the handleRotation function
  const handleRotation = useCallback(() => {
    if (modelRef.current) {
      if (modelRef.current.rotation.y >= rotationLimit) {
        setRotationDirection(-1);
      } else if (modelRef.current.rotation.y <= -rotationLimit) {
        setRotationDirection(1);
      }
    }
  }, [rotationLimit]);

  useEffect(() => {
    const interval = setInterval(handleRotation, 100); // Check rotation direction every 100ms
    return () => clearInterval(interval);
  }, [handleRotation]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002 * rotationDirection; // Adjust the speed of rotation here
    }
  });

  return (
    <group ref={modelRef} position={position}>
      <primitive object={gltf.scene} />
    </group>
  );
});

export default Model;
