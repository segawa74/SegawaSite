import "./PortfolioCard.css";

interface PortfolioCardProps {
  details: {
    link: string;
    title: string;
    img: string;
    comment?: string; // コメントはオプション
  };
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ details }) => {
  return (
    <div className="portfolio-card">
      <a href={details.link} target="_blank" rel="noopener noreferrer">
        <h6>{details.title}</h6>

        <img src={details.img} alt={details.title} />
        {details.comment}
      </a>
    </div>
  );
};

export default PortfolioCard;
