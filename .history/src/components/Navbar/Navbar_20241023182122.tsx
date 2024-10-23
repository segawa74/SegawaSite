import { useState } from "react";
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

      <nav className="bg-[#B0A695] sticky top-0 z-30 backdrop-blur-sm py-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
          <img className="w-48 h-auto" src="" alt="Logo" />

          <ul className="hidden md:flex items-center space-x-6">
            {["hero", "skills", "exp", "pf", "contact-me"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth
                  spy
                  offset={-80}
                  className="text-[#F3EEEA] text-base font-medium relative cursor-pointer after:block after:content-[''] after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#B0A695] after:to-[#776B5D] after:absolute after:bottom-[-0.25rem] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {section.charAt(0).toUpperCase() +
                    section.slice(1).replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="w-10 h-10 flex items-center justify-center border-none rounded-md text-white bg-gradient-to-r from-[#EBE3D5] to-[#B0A695] hover:bg-[#EBE3D5] transition-all duration-300 md:hidden"
            onClick={toggleMenu}
          >
            <span className="material-symbols-outlined text-2xl">
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
