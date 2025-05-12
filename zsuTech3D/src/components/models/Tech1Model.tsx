import Scene from "../scene/Scene";

const Tech1Model = () => {
  return (
    <div style={{ width: "1150px", height: "500px" }}>
      <Scene
        modelPath="/models/T-72.glb"
        isRotating={true}
        position={[0, -6, 7]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </div>
  );
};

export default Tech1Model;
