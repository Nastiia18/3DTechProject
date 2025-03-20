import HimarsModel from "../../components/models/HimarsModel";
import HimarsStaticModel from "../../components/models/HimarsStaticModel";

import "./StyleHimars.css";

const Tech3Page = () => {
  return (
    <>
      <div className="sectionsH">
        <div className="innerH section1-himors">
          <div className="container-text">
            <div className="titles-container">
              <h1 className="title-t3">M142</h1>
              <h2 className="title-t3">HIMARS</h2>
            </div>
            <div className="text-right">
              <p className="description-t3">
                Високомобільна реактивна артилерійська система, розроблена в
                США. Забезпечує точні удари на великих відстанях та високу
                маневреність на полі бою.
              </p>
              <button className="details-button">Детальніше</button>
            </div>
          </div>

          <div className="modelH-container">
            <HimarsModel />
          </div>
        </div>
      </div>

      <div className="sectionsH">
        <div className="innerH sectionHimars">
          <div className="description-container">
            <h2 className="description-title">HIMARS</h2>
            <p className="description-text">
              високомобільна система залпового вогню, оснащена ракетою дальністю
              до 300 км. Відрізняється швидким розгортанням, високою точністю та
              маневреністю, що робить її ідеальною для сучасних бойових умов.
            </p>
          </div>

          <div className="model-himars-container shadow-model">
            <HimarsStaticModel />
          </div>

          <div className="specs-column">
            <div className="spec-item">
              <div className="spec-name">16,25 т</div>
              <div className="spec-value">Вага</div>
            </div>
            <div className="spec-item">
              <div className="spec-name">85 км/год</div>
              <div className="spec-value">Макс. швидкість</div>
            </div>
            <div className="spec-item">
              <div className="spec-name">300 км</div>
              <div className="spec-value">Дальність стрільби</div>
            </div>
            <div className="spec-item">
              <div className="spec-name">3 особи</div>
              <div className="spec-value">Екіпаж</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech3Page;
