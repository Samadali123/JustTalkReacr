
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RegionSelect from "./RegionSelect";
import { navigationLinks } from "../data/navigationLinks";
import JustTalkLogo from "../assets/images/just-talk-logo.png";
import Industries from "./Industries";
import Features from "./Features";
import TopBar from "./TopBar";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (dropdown) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpenDropdown(null), 200);
    setHoverTimeout(timeout);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <TopBar />
      <nav className="container mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={JustTalkLogo} alt="JustTalk Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav links */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navigationLinks.map((link) => {
            if (link.label === "Industries" || link.label === "Features") {
              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label.toLowerCase())}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="cursor-pointer flex items-center gap-1">
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                  {openDropdown === link.label.toLowerCase() && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-2xl z-50 p-6 w-max">
                      {link.label === "Industries" ? <Industries /> : <Features setOpenDropdown={setOpenDropdown} />}
                    </div>
                  )}
                </li>
              );
            }
            return (
              <li key={link.label}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-dark-text hover:text-primary"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right-side buttons */}
        <div className="hidden md:flex items-center gap-4">
          <RegionSelect />
          <NavLink
            to="https://app.justtawk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-text font-medium hover:text-primary"
          >
            Login
          </NavLink>
          <NavLink
            to="https://app.justtawk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Free Demo
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-dark-text hover:text-primary"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-4">
              <RegionSelect />
            </li>
            <li>
              <NavLink
                to="https://app.justtawk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-text font-medium hover:text-primary"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://app.justtawk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
              >
                Free Demo
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}