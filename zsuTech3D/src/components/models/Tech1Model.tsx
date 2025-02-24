// Tech1Model.tsx
import Scene from "../scene/Scene";

const Tech1Model = () => {
  return (
    <div style={{ width: "1150px", height: "500px" }}>
      <Scene
        modelPath="/models/T-72.glb"
        isRotating={true}
        position={[0, -3, 4.5]}
        rotation={[0, -Math.PI / 3.5, 0]}
      />
    </div>
  );
};

export default Tech1Model;
