import { useEffect, useState } from "react";
import Scene from "../scene/Scene";

const HimarsModel = () => {
  const [position, setPosition] = useState<[number, number, number]>([
    -1, -4.5, -12,
  ]);
  const [size, setSize] = useState<{ width: string; height: string }>({
    width: "1100px",
    height: "900px",
  });

  useEffect(() => {
    const updateModelProps = () => {
      const width = window.innerWidth;

      if (width < 576) {
        // Мобільні пристрої
        setPosition([0, -7, -42]);
        setSize({ width: "500px", height: "350px" });
      } else if (width < 920) {
        // Планшети
        setPosition([-1, -6, -27]);
        setSize({ width: "820px", height: "500px" });
      } else {
        // Десктоп
        setPosition([-1, -4.5, -12]);
        setSize({ width: "1100px", height: "900px" });
      }
    };

    updateModelProps();
    window.addEventListener("resize", updateModelProps);

    return () => window.removeEventListener("resize", updateModelProps);
  }, []);

  return (
    <div style={{ width: size.width, height: size.height }}>
      <Scene
        modelPath="/models/himars.glb"
        isRotating={true}
        position={position}
        rotation={[0, Math.PI / 2, 0]}
      />
    </div>
  );
};

export default HimarsModel;
