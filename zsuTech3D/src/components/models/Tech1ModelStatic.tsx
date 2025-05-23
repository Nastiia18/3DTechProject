import { useEffect, useState } from "react";
import Scene from "../scene/Scene";
import { MathUtils } from "three";
import "../../pages/technics1/Style.css";

const Tech1ModelStatic = () => {
  const [position, setPosition] = useState<[number, number, number]>([
    -1, -6, 6,
  ]);
  const [containerSize, setContainerSize] = useState<{
    width: string;
    height: string;
  }>({
    width: "600px",
    height: "70vh",
  });

  useEffect(() => {
    const updateForScreen = () => {
      const width = window.innerWidth;

      if (width < 560) {
        // мобілка
        setPosition([-2, -6, -2]);
        setContainerSize({ width: "600px", height: "65vh" });
      } else if (width < 920) {
        // планшет
        setPosition([0, -6, 3]);
        setContainerSize({ width: "600px", height: "70vh" });
      } else {
        // комп'ютер
        setPosition([-1, -6, 6]);
        setContainerSize({ width: "600px", height: "70vh" });
      }
    };

    updateForScreen();
    window.addEventListener("resize", updateForScreen);

    return () => window.removeEventListener("resize", updateForScreen);
  }, []);

  return (
    <div style={{ width: containerSize.width, height: containerSize.height }}>
      <Scene
        modelPath="/models/T-72.glb"
        isRotating={false}
        position={position}
        rotation={[0, MathUtils.degToRad(90), 0]}
      />
    </div>
  );
};

export default Tech1ModelStatic;
