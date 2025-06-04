import {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import Scene, { SceneRef } from "../scene/Scene";

// Тип для зовнішнього рефа
export type HimarsModelRef = {
  resetModel: () => void;
};

const HimarsModel = forwardRef<HimarsModelRef>((_, ref) => {
  const [position, setPosition] = useState<[number, number, number]>([
    -1, -4.5, -12,
  ]);
  const [rotation, setRotation] = useState<[number, number, number]>([
    0,
    Math.PI / 2,
    0,
  ]);
  const [size, setSize] = useState<{ width: string; height: string }>({
    width: "1100px",
    height: "900px",
  });

  const sceneRef = useRef<SceneRef>(null);

  // Кнопка "Скинути" ззовні
  useImperativeHandle(ref, () => ({
    resetModel: () => {
      const width = window.innerWidth;

      if (width < 576) {
        setPosition([2, -7, -41]);
        setSize({ width: "500px", height: "350px" });
      } else if (width < 920) {
        setPosition([-1, -6, -27]);
        setSize({ width: "820px", height: "500px" });
      } else {
        setPosition([-1, -4.5, -12]);
        setSize({ width: "1100px", height: "900px" });
      }

      setRotation([0, Math.PI / 2, 0]);
      sceneRef.current?.resetControls();
    },
  }));

  useEffect(() => {
    const updateModelProps = () => {
      const width = window.innerWidth;

      if (width < 576) {
        setPosition([2, -7, -41]);
        setSize({ width: "500px", height: "350px" });
      } else if (width < 920) {
        setPosition([-1, -6, -27]);
        setSize({ width: "820px", height: "500px" });
      } else {
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
        ref={sceneRef}
        modelPath="/models/himars.glb"
        isRotating={true}
        position={position}
        rotation={rotation}
      />
    </div>
  );
});

export default HimarsModel;
