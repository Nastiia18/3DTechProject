import Scene from "../scene/Scene";

const BayraktarModel = () => {
  return (
    <div style={{ width: "100%", height: "90%" }}>
      <Scene
        modelPath="/models/bayraktar.glb"
        isRotating={true}
        position={[0, 3, 5]}
        rotation={[0, -Math.PI / 3, 0]}
      />
    </div>
  );
};

export default BayraktarModel;
