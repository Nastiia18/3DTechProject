import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three";

const Model = ({ modelPath }: { modelPath: string }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const modelRef = useRef<Object3D>(null);

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={3.5}
      position={[2, -3, 5]}
      rotation={[0, -Math.PI / 3.5, 0]}
      castShadow
    />
  );
};

export default Model;
