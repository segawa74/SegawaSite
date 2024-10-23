import { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-scroll";

const NavBar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="" alt="" />

          <ul>
            <li>
              <Link
                activeClass="active"
                to="hero"
                smooth
                spy
                offset={-80}
                className="menu-item"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="skills"
                smooth
                spy
                offset={-120}
                className="menu-item"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="exp"
                smooth
                spy
                offset={-100}
                className="menu-item"
              >
                Experience
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="pf"
                smooth
                spy
                offset={-100}
                className="menu-item"
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="contact-me"
                smooth
                spy
                offset={-100}
                className="menu-item"
              >
                Contact Me
              </Link>
            </li>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
