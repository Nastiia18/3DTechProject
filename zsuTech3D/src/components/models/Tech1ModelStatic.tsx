// Tech1ModelStatic.tsx
import Scene from "../scene/Scene";
import { MathUtils } from "three";
import "../../pages/technics1/Style.css";

const Tech1ModelStatic = () => {
  return (
    <div style={{ width: "600px", height: "70vh" }}>
      <Scene
        modelPath="/models/т-72.glb"
        isRotating={false}
        position={[2, -3.5, 3.2]}
        rotation={[0, MathUtils.degToRad(-90), 0]}
      />
    </div>
  );
};

export default Tech1ModelStatic;
