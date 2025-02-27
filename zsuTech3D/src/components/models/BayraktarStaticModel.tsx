import Scene from "../scene/Scene";

const BayraktarStaticModel = () => {
  return (
    <div style={{ width: "600px", height: "90vh" }}>
      <Scene
        modelPath="/models/bayraktar2.glb"
        isRotating={false}
        position={[0, -1, 7]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </div>
  );
};

export default BayraktarStaticModel;
