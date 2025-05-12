// Model.tsx
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three";

const Model = ({
  modelPath,
  isRotating,
  position,
  rotation,
}: {
  modelPath: string;
  isRotating: boolean;
  position: [number, number, number];
  rotation: [number, number, number];
}) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const modelRef = useRef<Object3D>(null);

  const clonedScene = useMemo(() => gltf.scene.clone(), [gltf.scene]);

  useFrame(() => {
    if (isRotating && modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={clonedScene}
      scale={3.5}
      position={position}
      rotation={rotation}
      castShadow
    />
  );
};

export default Model;
