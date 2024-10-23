import { useRef } from "react";
import "./Portfolio.css";
import { PORTFOLIO } from "../../utils/data";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import Slider from "react-slick";

interface PortfolioItem {
  title: string;
}

const Portfolio = () => {
  const sliderRef = useRef<Slider>(null);

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
          {PORTFOLIO.map((item: PortfolioItem) => (
            <PortfolioCard key={item.title} dtails={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
