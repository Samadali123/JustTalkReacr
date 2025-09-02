
// src/components/Navbar.jsx
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import RegionSelect from "./RegionSelect";
import { navigationLinks } from "../data/navigationLinks";
import JustTalkLogo from "../assets/images/just-talk-logo.png";
import Industries from "./Industries";
import Features from "./Features";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = (dropdown) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpenDropdown(null), 100);
    setHoverTimeout(timeout);
  };

  return (
    <nav className="flex items-center justify-around px-10 h-[65px] bg-white shadow">
      {/* Logo */}
      <Link to="/" className="shrink-0">
        <img
          src={JustTalkLogo}
          alt="JustTalk Logo"
          className="h-10 w-auto object-contain"
        />
      </Link>

      {/* Nav links */}
      <ul className="flex items-center gap-6 font-medium">
        {navigationLinks.map((link) => {
          // -------------------------------
          // Industries dropdown
          // -------------------------------
          if (link.label === "Industries") {
            return (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter("industries")}
                onMouseLeave={handleMouseLeave}
              >
                <span className="text-black cursor-default">Industries</span>
                {openDropdown === "industries" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-md shadow-lg z-50 px-6 py-4">
                    <Industries />
                  </div>
                )}
              </li>
            );
          }

          // -------------------------------
          // Features dropdown
          // -------------------------------
          if (link.label === "Features") {
            return (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter("features")}
                onMouseLeave={handleMouseLeave}
              >
                <span className="text-black cursor-default">Features</span>
                {openDropdown === "features" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-md shadow-lg z-50 px-6 py-4">
                    <Features setOpenDropdown={setOpenDropdown} />
                  </div>
                )}
              </li>
            );
          }

          // -------------------------------
          // Normal routed links
          // -------------------------------
          return (
            <li key={link.label}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-red-600" : "text-black"
                }
              >
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>

      {/* Right-side buttons */}
      <div className="flex items-center gap-4 text-sm">
        <RegionSelect />
        <NavLink
          to="https://app.justtawk.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:underline"
        >
          Login
        </NavLink>
        <NavLink
          to="https://app.justtawk.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:underline"
        >
          Free Demo
        </NavLink>
      </div>
    </nav>
  );
}