import t72Img from "../../../assets/images/tynk.jpg";
import bayraktarImg from "../../../assets/images/bayraktar.jpg";
import himarsImg from "../../../assets/images/himars.jpg";

type TechCardProps = {
  title: string;
  onClick?: () => void;
};

export const TechCard: React.FC<TechCardProps> = ({ title, onClick }) => {
  const imageSrc = getImageForTitle(title);

  return (
    <div className="card" onClick={onClick}>
      <img src={imageSrc} alt={title} />
      <div className="card-title">{title}</div>
    </div>
  );
};

const getImageForTitle = (title: string): string => {
  switch (title) {
    case "Т-72":
      return t72Img;
    case "Bayraktar TB2":
      return bayraktarImg;
    case "HIMARS":
      return himarsImg;
    default:
      return t72Img;
  }
};
