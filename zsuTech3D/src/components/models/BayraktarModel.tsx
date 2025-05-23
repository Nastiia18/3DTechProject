import { useEffect, useState } from "react";
import Scene from "../scene/Scene";

const BayraktarModel = () => {
  const [position, setPosition] = useState<[number, number, number]>([
    0, 3, 5.2,
  ]);
  const [size, setSize] = useState<{ width: string; height: string }>({
    width: "100%",
    height: "90%",
  });

  useEffect(() => {
    const updateModelProps = () => {
      const width = window.innerWidth;

      if (width < 576) {
        // Мобільні
        setPosition([0, 1, -6]);
        setSize({ width: "98%", height: "40vh" });
      } else if (width < 920) {
        // Планшети
        setPosition([0, 5, 10]);
        setSize({ width: "100%", height: "500px" });
      } else {
        // Десктоп
        setPosition([0, 3, 5.2]);
        setSize({ width: "100%", height: "90%" });
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
        isRotating={true}
        position={position}
        rotation={[0, -Math.PI / 3, 0]}
      />
    </div>
  );
};

export default BayraktarModel;
