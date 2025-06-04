import React, { useState } from "react";
import "./StyleHome.css";
import militaryImage from "../../assets/images/military.png";
import { TechCard } from "./components/TechCard";
import "bootstrap/dist/css/bootstrap.min.css";
import * as BootstrapCarousel from "react-bootstrap/Carousel";
const Carousel: any = BootstrapCarousel.default || BootstrapCarousel;
import VideoModal from "./components/VideoModal";
import { useTranslation } from "react-i18next";

type TechItem = {
  title: string;
  videoUrl?: string;
};

const techItems: TechItem[] = [
  { title: "Т-72", videoUrl: "https://www.youtube.com/embed/RBUwdxjM60c" },
  {
    title: "Bayraktar TB2",
    videoUrl: "https://www.youtube.com/embed/RBUwdxjM60c",
  },
  { title: "HIMARS", videoUrl: "https://www.youtube.com/embed/RBUwdxjM60c" },
];

const HomePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleCardClick = (videoUrl?: string) => {
    if (videoUrl) {
      setCurrentVideo(videoUrl);
      setShowModal(true);
    }
  };
  return (
    <>
      <section className="sections homepage">
        <div className="inner home-inner">
          <div className="hero-text">
            <h1 className="hero-title">{t("home.heroTitle")}</h1>
            <p className="hero-subtitle">{t("home.heroSubtitle")}</p>
          </div>
          <div className="hero-image">
            <img src={militaryImage} alt="Силует військового" />
          </div>
        </div>
      </section>

      <section className="slider-section">
        <div className="slider-inner">
          <h2 className="slider-title">{t("home.sliderTitle")}</h2>
          <Carousel indicators={false} interval={null}>
            {techItems.map(({ title, videoUrl }) => (
              <Carousel.Item key={title}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "auto",
                    backgroundColor: "transparent",
                  }}
                >
                  <TechCard
                    title={title}
                    onClick={() => handleCardClick(videoUrl)}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <VideoModal
            show={showModal}
            onHide={() => setShowModal(false)}
            videoUrl={currentVideo!}
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
