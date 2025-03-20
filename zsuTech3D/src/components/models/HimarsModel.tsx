import Scene from "../scene/Scene";

const HimarsModel = () => {
  return (
    <div style={{ width: "1100px", height: "900px" }}>
      <Scene
        modelPath="/models/himars.glb"
        isRotating={true}
        position={[-1, -4.5, -12]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </div>
  );
};

export default HimarsModel;
