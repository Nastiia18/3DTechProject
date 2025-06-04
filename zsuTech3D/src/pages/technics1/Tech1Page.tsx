import "./Style.css";
import { useRef } from "react";
import Tech1Model, { Tech1ModelRef } from "../../components/models/Tech1Model";
import Tech1ModelStatic from "../../components/models/Tech1ModelStatic";
import { useTranslation } from "react-i18next";

const Tech1Page = () => {
  const { t } = useTranslation();
  const modelRef = useRef<Tech1ModelRef>(null);
  const handleReset = () => {
    modelRef.current?.resetPosition();
  };

  return (
    <>
      <div className="sections tech1-page">
        <div className="inner column">
          <div className="text-content">
            <h1 className="title">{t("tank.title")}</h1>
            <p className="description">{t("tank.description")}</p>
            <button className="custom-button" onClick={handleReset}>
              {t("tank.reset_button")}
            </button>
          </div>
          <div className="model-container">
            <div className="light-rays"></div>
            <Tech1Model ref={modelRef} />
          </div>
        </div>
      </div>

      <div className="sections model-center-section">
        <div className="left-line"></div>
        <div className="inner">
          <div className="center-modelStatic">
            <Tech1ModelStatic />

            <div className="features-grid">
              <div className="feature-card">
                <i className="fas fa-tachometer-alt"></i>
                <div className="text-characteristic">
                  <h3>{t("tank.speed_value")}</h3>
                  <p>{t("tank.speed_label")}</p>
                </div>
              </div>
              <div className="feature-card">
                <i className="fas fa-shield-alt"></i>
                <div className="text-characteristic">
                  <h3>{t("tank.range_value")}</h3>
                  <p>{t("tank.range_label")}</p>
                </div>
              </div>
              <div className="feature-card">
                <i className="fas fa-cogs"></i>
                <div className="text-characteristic">
                  <h3>{t("tank.engine_label")}</h3>
                  <p>{t("tank.engine_value")}</p>
                </div>
              </div>
            </div>
            <div className="model-description-bottom">
              <div>
                <h3>{t("tank.height_label")}</h3>
                <p>{t("tank.height_value")}</p>
              </div>
              <div className="divider"></div>
              <div>
                <h3>{t("tank.length_label")}</h3>
                <p>{t("tank.length_value")}</p>
              </div>
              <div className="divider"></div>
              <div>
                <h3>{t("tank.width_label")}</h3>
                <p>{t("tank.width_value")}</p>
              </div>
              <div className="divider"></div>
              <div>
                <h3>{t("tank.weight_label")}</h3>
                <p>{t("tank.weight_value")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech1Page;
