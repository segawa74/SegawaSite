import { useRef } from "react";
import "./Portfolio.css";
import { PORTFOLIO } from "../../utils/data.js";
import PortfolioCard from "./PortfolioCard/PortfolioCard.jsx";
import Slider from "react-slick";
const Portfolio = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="pf" className="portfolio-container">
      <h5>Portfolio</h5>

      <div className="portfolio-item">
        <Slider ref={sliderRef} {...settings}>
          {PORTFOLIO.map((item) => (
            <PortfolioCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
