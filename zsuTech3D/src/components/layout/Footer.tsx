import { useTranslation } from "react-i18next";
import "../../i18n";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>{t("navigation.copyright")}</p>
    </footer>
  );
};

export default Footer;
