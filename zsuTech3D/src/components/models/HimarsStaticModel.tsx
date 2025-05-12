import Scene from "../scene/Scene";
import { MathUtils } from "three";

const HimarsStaticModel = () => {
  return (
    <div style={{ width: "600px", height: "70vh" }}>
      <Scene
        modelPath="/models/himars.glb"
        isRotating={false}
        position={[1, -6, -5]}
        rotation={[0, -MathUtils.degToRad(45), 0]}
      />
    </div>
  );
};

export default HimarsStaticModel;
