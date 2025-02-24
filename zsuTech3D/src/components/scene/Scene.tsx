// Scene.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

const Scene = ({
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
  return (
    <div style={{ height: "60vh" }}>
      <Canvas shadows camera={{ position: [0, 6, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[2, 5, 2]}
          intensity={2}
          castShadow
          shadow-bias={-0.005}
        />
        <Model
          modelPath={modelPath}
          isRotating={isRotating}
          position={position}
          rotation={rotation}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Scene;
