import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

type VideoModalProps = {
  show: boolean;
  onHide: () => void;
  videoUrl: string;
};

const VideoModal: React.FC<VideoModalProps> = ({ show, onHide, videoUrl }) => {
  const { t } = useTranslation();

  const iframeElement = (
    <iframe
      width="100%"
      height="400"
      src={videoUrl}
      title="Відео"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ border: "none" }}
    />
  );

  const footer: JSX.Element = (
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        {t("navigation.close")}
      </Button>
    </Modal.Footer>
  );

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Body style={{ padding: 0 }}>{iframeElement}</Modal.Body>
      {footer}
    </Modal>
  );
};

export default VideoModal;
