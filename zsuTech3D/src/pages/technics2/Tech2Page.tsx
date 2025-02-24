import "./StyleBayraktar.css";
import BayraktarModel from "../../components/models/BayraktarModel";

const Tech2Page = () => {
  return (
    <>
      <div className="sectionsB">
        <div className="innerB tech2-column">
          <div className="text-container">
            <h1 className="tech2-title">Bayraktar TB2</h1>
            <p className="tech2-description">
              це турецький середньовисотний безпілотний літальний апарат (БПЛА)
              оперативно-тактичного призначення, розроблений компанією Baykar
              Makina.
            </p>
          </div>
          <div className="tech2-model-wrapper">
            <BayraktarModel />
          </div>
        </div>
      </div>

      <div className="sectionsB ">
        <div className="innerB  bayraktar-grid">
          <div className="bayraktar-card">
            <i className="fas fa-tachometer-alt"></i>
            <div className="bayraktar-text">
              <h3>Макс. швидкість</h3>
              <p>222 км/год</p>
            </div>
          </div>
          <div className="bayraktar-card">
            <i className="fas fa-clock"></i>
            <div className="bayraktar-text">
              <h3>Тривалість польоту</h3>
              <p>27 год</p>
            </div>
          </div>
          <div className="bayraktar-card">
            <i className="fas fa-arrows-alt"></i>
            <div className="bayraktar-text">
              <h3>Радіус дії</h3>
              <p>150 км</p>
            </div>
          </div>
          <div className="bayraktar-card">
            <i className="fas fa-weight-hanging"></i>
            <div className="bayraktar-text">
              <h3>Макс. злітна вага</h3>
              <p>700 кг</p>
            </div>
          </div>
          <div className="bayraktar-card">
            <i className="fas fa-bomb"></i>
            <div className="bayraktar-text">
              <h3>Озброєння</h3>
              <p>4 керовані ракети</p>
            </div>
          </div>
          <div className="bayraktar-card">
            <i className="fas fa-dollar-sign"></i>
            <div className="bayraktar-text">
              <h3>Вартість</h3>
              <p>5 млн $</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech2Page;
