import {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import Scene, { SceneRef } from "../scene/Scene";

export type BayraktarModelRef = {
  resetModel: () => void;
};

const BayraktarModel = forwardRef<BayraktarModelRef>((_, ref) => {
  const [position, setPosition] = useState<[number, number, number]>([
    0, 3, 5.2,
  ]);
  const [rotation, setRotation] = useState<[number, number, number]>([
    0,
    -Math.PI / 3,
    0,
  ]);
  const [size, setSize] = useState<{ width: string; height: string }>({
    width: "100%",
    height: "90%",
  });
  const sceneRef = useRef<SceneRef>(null);

  useImperativeHandle(ref, () => ({
    resetModel: () => {
      const width = window.innerWidth;

      if (width < 576) {
        setPosition([0.3, 2, -3.8]);
        setSize({ width: "98%", height: "40vh" });
      } else if (width < 920) {
        setPosition([0, 2, 2.6]);
        setSize({ width: "100%", height: "500px" });
      } else {
        setPosition([0, 3, 5.2]);
        setSize({ width: "100%", height: "90%" });
      }

      setRotation([0, -Math.PI / 3, 0]);
      sceneRef.current?.resetControls();
    },
  }));

  useEffect(() => {
    const updateModelProps = () => {
      const width = window.innerWidth;

      if (width < 576) {
        setPosition([0.3, 2, -3.8]);
        setSize({ width: "98%", height: "40vh" });
      } else if (width < 920) {
        setPosition([0, 2, 2.6]);
        setSize({ width: "100%", height: "500px" });
      } else {
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
        ref={sceneRef}
        modelPath="/models/bayraktar.glb"
        isRotating={true}
        position={position}
        rotation={rotation}
      />
    </div>
  );
});

export default BayraktarModel;
