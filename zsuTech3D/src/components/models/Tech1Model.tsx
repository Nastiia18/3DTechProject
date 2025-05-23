import { useEffect, useState } from "react";
import Scene from "../scene/Scene";

const Tech1Model = () => {
  const [position, setPosition] = useState<[number, number, number]>([
    0, -6, 7,
  ]);

  useEffect(() => {
    const updatePosition = () => {
      if (window.innerWidth < 560) {
        // мобілки
        setPosition([-6, -8, -3]);
      } else if (window.innerWidth < 920) {
        // планшети
        setPosition([-2.5, -6, 1]);
      } else {
        // комп’ютери
        setPosition([0, -6, 7]);
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition); // оновлення при зміні розміру

    return () => window.removeEventListener("resize", updatePosition); // очищення
  }, []);

  return (
    <div style={{ width: "1150px", height: "500px" }}>
      <Scene
        modelPath="/models/T-72.glb"
        isRotating={true}
        position={position}
        rotation={[0, Math.PI / 2, 0]}
      />
    </div>
  );
};

export default Tech1Model;
