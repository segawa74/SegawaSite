import "./PortfolioCard.css";
import PropTypes from "prop-types";
const PortfolioCard = ({ details }) => {
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

PortfolioCard.propTypes = {
  details: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    comment: PropTypes.string,
  }).isRequired,
};

export default PortfolioCard;
