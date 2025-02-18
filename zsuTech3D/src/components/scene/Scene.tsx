import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

const Scene = ({ modelPath }: { modelPath: string }) => {
  return (
    <div style={{ width: "55vw", height: "55vh" }}>
      <Canvas shadows camera={{ position: [0, 6, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[2, 5, 2]}
          intensity={2}
          castShadow
          shadow-mapSize={{ width: 1024, height: 1024 }}
          shadow-bias={-0.005}
        />

        <Model modelPath={modelPath} />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Scene;
