import { useEffect, useState } from "react";
import { MathUtils } from "three";
import Scene from "../scene/Scene";

const HimarsStaticModel = () => {
  const [position, setPosition] = useState<[number, number, number]>([
    1, -6, -5,
  ]);
  const [size, setSize] = useState<{ width: string; height: string }>({
    width: "600px",
    height: "70vh",
  });

  useEffect(() => {
    const updateProps = () => {
      const width = window.innerWidth;

      if (width < 576) {
        // мобілки
        setPosition([-1, -6.5, -22]);
        setSize({ width: "95vw", height: "40vh" });
      } else if (width < 920) {
        // планшети
        setPosition([1, -7.5, -11]);
        setSize({ width: "660px", height: "70vh" });
      } else {
        // десктоп
        setPosition([1, -6, -5]);
        setSize({ width: "600px", height: "70vh" });
      }
    };

    updateProps();
    window.addEventListener("resize", updateProps);

    return () => window.removeEventListener("resize", updateProps);
  }, []);

  return (
    <div style={{ width: size.width, height: size.height }}>
      <Scene
        modelPath="/models/himars.glb"
        isRotating={false}
        position={position}
        rotation={[0, -MathUtils.degToRad(45), 0]}
      />
    </div>
  );
};

export default HimarsStaticModel;
