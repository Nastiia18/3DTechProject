import { useRef } from "react";
import HimarsModel, {
  HimarsModelRef,
} from "../../components/models/HimarsModel";
import HimarsStaticModel from "../../components/models/HimarsStaticModel";
import "./StyleHimars.css";
import { useTranslation } from "react-i18next";

const Tech3Page = () => {
  const { t } = useTranslation();
  const himarsRef = useRef<HimarsModelRef>(null);

  const handleReset = () => {
    himarsRef.current?.resetModel();
  };
  return (
    <>
      <div className="sectionsH">
        <div className="innerH section1-himors">
          <div className="light-rays-himars"></div>
          <div className="container-text">
            <div className="titles-container">
              <h1 className="title-t3">{t("himars.title_main")}</h1>
              <h2 className="title-t3">{t("himars.title_secondary")}</h2>
            </div>
            <div className="text-right">
              <p className="description-t3">{t("himars.short_description")}</p>
              <button onClick={handleReset} className="details-button">
                {t("himars.reset_button")}
              </button>
            </div>
          </div>

          <div className="modelH-container">
            <HimarsModel ref={himarsRef} />
          </div>
        </div>
      </div>

      <div className="sectionsH">
        <div className="innerH sectionHimars">
          <div className="light-rays-himars2"></div>
          <div className="description-container">
            <h2 className="description-title">{t("himars.title_secondary")}</h2>
            <p className="description-text">
              {t("himars.full_description_text")}
            </p>
          </div>

          <div className="model-himars-container shadow-model">
            <HimarsStaticModel />
          </div>

          <div className="specs-column">
            <div className="spec-item">
              <div className="spec-name">{t("himars.weight_value")}</div>
              <div className="spec-value">{t("himars.weight_label")}</div>
            </div>
            <div className="spec-item">
              <div className="spec-name">{t("himars.speed_value")}</div>
              <div className="spec-value">{t("himars.speed_label")}</div>
            </div>
            <div className="spec-item">
              <div className="spec-name">{t("himars.range_value")}</div>
              <div className="spec-value">{t("himars.range_label")}</div>
            </div>
            <div className="spec-item">
              <div className="spec-name">{t("himars.crew_value")}</div>
              <div className="spec-value">{t("himars.crew_label")}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech3Page;
