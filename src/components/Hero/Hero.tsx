import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Hi! I&apos;m Kazuki Segawa</h2>
        <p>
          ご覧いただきありがとうございます。こちらのサイトはスキルをアピールするためのポートフォリオサイトです。
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/img01.png" alt="" />
          </div>
          <img src="./assets/images/identicon.png" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
