import { useRef } from "react";
import "./StyleBayraktar.css";
import BayraktarModel, {
  BayraktarModelRef,
} from "../../components/models/BayraktarModel";
import BayraktarStaticModel from "../../components/models/BayraktarStaticModel";
import { useTranslation } from "react-i18next";

const Tech2Page = () => {
  const { t } = useTranslation();
  const modelRef = useRef<BayraktarModelRef>(null);

  const handleReset = () => {
    modelRef.current?.resetModel();
  };
  return (
    <>
      <div className="sectionsB page-section">
        <div className="innerB tech2-column">
          <div className="text-container">
            <h1 className="tech2-title">{t("bayraktar.title")}</h1>
            <p className="tech2-description">{t("bayraktar.description")}</p>
            <button className="bayractar-button" onClick={handleReset}>
              {t("bayraktar.reset_button")}
            </button>
          </div>
          <div className="tech2-model-wrapper">
            <div className="light-rays-blue"></div>
            <BayraktarModel ref={modelRef} />
          </div>
          <div className="price-tag">
            <span className="price-value">$5,000,000</span>
          </div>
        </div>
      </div>
      <div className="sectionsB section1-page">
        <div className="light-rays-section"></div>
        <div className="innerB">
          <div className="drone-info left">
            <p className="drone-value">{t("bayraktar.weight_value")}</p>
            <h3 className="drone-label">{t("bayraktar.weight_label")}</h3>

            <p className="drone-value">{t("bayraktar.weapons_value")}</p>
            <h3 className="drone-label">{t("bayraktar.weapons_label")}</h3>

            <p className="drone-value">{t("bayraktar.length_value")}</p>
            <h3 className="drone-label">{t("bayraktar.length_label")}</h3>
          </div>

          <div className="container-model">
            <BayraktarStaticModel />
          </div>
          <div className="drone-info right">
            <p className="drone-value">{t("bayraktar.speed_value")}</p>
            <h3 className="drone-label">{t("bayraktar.speed_label")}</h3>

            <p className="drone-value">{t("bayraktar.flight_time_value")}</p>
            <h3 className="drone-label">{t("bayraktar.flight_time_label")}</h3>

            <p className="drone-value">{t("bayraktar.range_value")}</p>
            <h3 className="drone-label">{t("bayraktar.range_label")}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech2Page;
