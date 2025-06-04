import {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import Scene, { SceneRef } from "../scene/Scene";

export type Tech1ModelRef = {
  resetPosition: () => void;
};

const Tech1Model = forwardRef<Tech1ModelRef>((_, ref) => {
  const [position, setPosition] = useState<[number, number, number]>([
    0, -6, 7,
  ]);
  const [rotation, setRotation] = useState<[number, number, number]>([
    0,
    Math.PI / 2,
    0,
  ]);
  const sceneRef = useRef<SceneRef>(null);

  useImperativeHandle(ref, () => ({
    resetPosition: () => {
      const width = window.innerWidth;
      if (width < 560) {
        setPosition([-6, -8, -3]);
      } else if (width < 920) {
        setPosition([-2.5, -6, 1]);
      } else {
        setPosition([0, -6, 7]);
      }

      setRotation([0, Math.PI / 2, 0]);

      sceneRef.current?.resetControls();
    },
  }));

  useEffect(() => {
    const updatePosition = () => {
      if (window.innerWidth < 560) {
        setPosition([-6, -8, -3]);
      } else if (window.innerWidth < 920) {
        setPosition([-2.5, -6, 1]);
      } else {
        setPosition([0, -6, 7]);
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <div style={{ width: "1150px", height: "500px" }}>
      <Scene
        ref={sceneRef}
        modelPath="/models/T-72.glb"
        isRotating={true}
        position={position}
        rotation={rotation}
      />
    </div>
  );
});

export default Tech1Model;
