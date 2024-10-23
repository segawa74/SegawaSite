import "./MobileNav.css";

interface MobileNavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, toggleMenu }) => {
  const handleScroll = (sectionId: string) => {
    if (isOpen) toggleMenu();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <ul>
            <li>
              <a onClick={() => handleScroll("hero")} className="menu-item">
                Home
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("skills")} className="menu-item">
                Skills
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("exp")} className="menu-item">
                Experience
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("pf")} className="menu-item">
                Portfolio
              </a>
            </li>

            <li>
              <a
                onClick={() => handleScroll("contact-me")}
                className="menu-item"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
