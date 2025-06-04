import { useEffect, useState } from "react";
import Scene from "../scene/Scene";

const BayraktarStaticModel = () => {
  const [position, setPosition] = useState<[number, number, number]>([0, 2, 6]);
  const [size, setSize] = useState<{ width: string; height: string }>({
    width: "600px",
    height: "90vh",
  });

  useEffect(() => {
    const updateModelProps = () => {
      const width = window.innerWidth;

      if (width < 576) {
        // Мобільні
        setPosition([-1.8, 2, -4]);
        setSize({ width: "500px", height: "350px" });
      } else if (width < 920) {
        // Планшети
        setPosition([0.1, 1.5, 3]);
        setSize({ width: "650px", height: "80vh" });
      } else {
        // Десктоп
        setPosition([0, 2, 6]);
        setSize({ width: "600px", height: "90vh" });
      }
    };

    updateModelProps();
    window.addEventListener("resize", updateModelProps);

    return () => window.removeEventListener("resize", updateModelProps);
  }, []);

  return (
    <div style={{ width: size.width, height: size.height, margin: "0 auto" }}>
      <Scene
        modelPath="/models/bayraktar.glb"
        isRotating={false}
        position={position}
        rotation={[Math.PI / 2, 3.14, 0]}
      />
    </div>
  );
};

export default BayraktarStaticModel;
