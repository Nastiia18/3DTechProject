import "./Style.css";
import Tech1Model from "../../components/models/Tech1Model";
import Tech1ModelStatic from "../../components/models/Tech1ModelStatic";

const Tech1Page = () => {
  return (
    <>
      <div className="sections tech1-page">
        <div className="inner column">
          <div className="text-content">
            <h1 className="title">Т-72</h1>
            <p className="description">
              Це радянський основний бойовий танк, який був розроблений у 1960-х
              роках і став одним з найпоширеніших танків у світі. Ось кілька
              характеристик, які можна використати на сторінці.
            </p>
            <button className="custom-button">Докладніше</button>
          </div>
          <div className="model-container">
            <Tech1Model />
          </div>
        </div>
      </div>

      <div className="sections model-center-section">
        <div className="inner">
          <div className="center-modelStatic">
            <Tech1ModelStatic />

            <div className="features-grid">
              <div className="feature-card">
                <i className="fas fa-tachometer-alt"></i>
                <div className="text-characteristic">
                  <h3>Макс. швидкість</h3>
                  <p>60 км/год</p>
                </div>
              </div>
              <div className="feature-card">
                <i className="fas fa-shield-alt"></i>
                <div className="text-characteristic">
                  <h3>Запас ходу</h3>
                  <p>500 км</p>
                </div>
              </div>
              <div className="feature-card">
                <i className="fas fa-cogs"></i>
                <div className="text-characteristic">
                  <h3>Двигун</h3>
                  <p>Дизельний, 780 к.с.</p>
                </div>
              </div>
            </div>
            <div className="model-description-bottom">
              <div>
                <h3>Висота:</h3>
                <p> 2,226 метра</p>
              </div>
              <div className="divider"></div>
              <div>
                <h3>Довжина:</h3>
                <p>6,86 метра</p>
              </div>
              <div className="divider"></div>
              <div>
                <h3>Ширина:</h3>
                <p>3,59 метрам</p>
              </div>
              <div className="divider"></div>
              <div>
                <h3>Маса:</h3>
                <p>41,5 тонни</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech1Page;
