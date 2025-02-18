import "./Style.css";
import Tech1Model from "../../components/models/Tech1Model";

const Tech1Page = () => {
  return (
    <div className="tech1-page ">
      <div className="form-container">
        <div className="text-content">
          <h1 className="title">Т-72</h1>
          <p className="description">
            це радянський основний бойовий танк, який був розроблений у 1960-х
            роках і став одним з найпоширеніших танків у світі. Ось кілька
            характеристик, які можна використати на сторінці
          </p>
          <button className="custom-button">Докладніше</button>
        </div>
        <div className="model-container">
          <Tech1Model />
        </div>
      </div>
    </div>
  );
};

export default Tech1Page;
