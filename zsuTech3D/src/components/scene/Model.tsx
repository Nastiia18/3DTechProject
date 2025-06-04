// Model.tsx
import { useRef, useMemo, useEffect } from "react";
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

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.set(...position);
    }
  }, [position]);

  // 👉 Реагуємо на зміну rotation (не обов'язково, але добре мати)
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(...rotation);
    }
  }, [rotation]);

  useFrame(() => {
    if (isRotating && modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive ref={modelRef} object={clonedScene} scale={3.5} castShadow />
  );
};

export default Model;
