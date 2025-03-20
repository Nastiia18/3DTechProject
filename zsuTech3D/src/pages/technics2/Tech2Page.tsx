import "./StyleBayraktar.css";
import BayraktarModel from "../../components/models/BayraktarModel";
import BayraktarStaticModel from "../../components/models/BayraktarStaticModel";

const Tech2Page = () => {
  return (
    <>
      <div className="sectionsB page-section">
        <div className="innerB tech2-column">
          <div className="text-container">
            <h1 className="tech2-title">Bayraktar TB2</h1>
            <p className="tech2-description">
              це турецький середньовисотний безпілотний літальний апарат (БПЛА)
              оперативно-тактичного призначення, розроблений компанією Baykar
              Makina.
            </p>
            <button className="bayractar-button">Докладніше</button>
          </div>
          <div className="tech2-model-wrapper">
            <BayraktarModel />
          </div>
        </div>
      </div>
      <div className="sectionsB section1-page">
        <div className="innerB">
          <div className="drone-info left">
            <p className="drone-value">700 кг</p>
            <h3 className="drone-label">Макс. злітна вага</h3>

            <p className="drone-value">4 ракети</p>
            <h3 className="drone-label">Озброєння</h3>

            <p className="drone-value">6.5 м</p>
            <h3 className="drone-label">Довжина</h3>
          </div>

          <div className="container-model">
            <BayraktarStaticModel />
          </div>

          <div className="price-tag">
            <span className="price-value">$5,000,000</span>
          </div>

          <div className="drone-info right">
            <p className="drone-value">222 км/год</p>
            <h3 className="drone-label">Макс. швидкість</h3>

            <p className="drone-value">27 год</p>
            <h3 className="drone-label">Тривалість польоту</h3>

            <p className="drone-value">150 км</p>
            <h3 className="drone-label">Радіус дії</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech2Page;
