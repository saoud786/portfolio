import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import profileImg from "../assets/profile.jpg";
import Profile from "../pages/Profile";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔥 INITIAL ACTIVE FIX (NO FLICKER)
  const getInitialSection = () => {
    const hash = window.location.hash.replace("#", "");
    return hash || "home";
  };

  const [active, setActive] = useState(getInitialSection);

  const { toggleTheme, theme } = useContext(ThemeContext);

  const closeMenu = () => setMenuOpen(false);

  // 🔥 Navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 ACTIVE + URL SYNC (MAIN FIX)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);

      // 🔥 URL UPDATE (IMPORTANT)
      window.history.replaceState(null, "", `#${current}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrap ${menuOpen ? "menu-open" : ""}`}>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* LEFT */}
        <div className="nav-left">
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* PROFILE */}
          <div
            className="brand profile-container"
            onClick={() => setShowProfile(true)}
          >
            <div className="profile-wrapper">
              <img
                src={profileImg}
                alt="profile"
                className="nav-profile-img"
              />
            </div>
            <span className="profile-name-hover">Profile</span>
          </div>
        </div>

        {/* CENTER */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          {/* MOBILE THEME */}
          <div className="menu-theme mobile-only">
            <button
              className="theme-toggle"
              onClick={(e) => {
                e.stopPropagation();
                toggleTheme();
              }}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
            >
              <span className="theme-text">
                {theme === "dark" ? "Dark" : "Light"}
              </span>

              <div className={`toggle-switch ${theme}`}>
                <div className="toggle-circle">
                  {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
                </div>
              </div>
            </button>
          </div>

          {/* NAV LINKS */}
          <a href="#home" className={active === "home" ? "active" : ""} onClick={closeMenu}>
            Home
          </a>

          <a href="#about" className={active === "about" ? "active" : ""} onClick={closeMenu}>
            About
          </a>

          <a href="#skills" className={active === "skills" ? "active" : ""} onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" className={active === "projects" ? "active" : ""} onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" className={active === "contact" ? "active" : ""} onClick={closeMenu}>
            Contact
          </a>

          {/* MOBILE SOCIAL */}
          <div className="mobile-bottom">
            <div className="social-icons">
              <div className="icon-container">
                <a href="https://github.com/saoud786" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>

              <div className="icon-container">
                <a href="https://www.linkedin.com/in/saoud-ali-1b40022b6/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="nav-actions desktop-only">

          {/* THEME */}
          <button
            className="theme-toggle"
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme();
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <div className={`toggle-switch ${theme}`}>
              <div className="toggle-circle">
                {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
              </div>
            </div>

            <span className="theme-tooltip">
              {theme === "dark" ? "Dark" : "Light"}
            </span>
          </button>

          {/* SOCIAL */}
          <div className="social-icons">
            <div className="icon-container">
              <a href="https://github.com/saoud786" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <span className="icon-tooltip">GitHub</span>
            </div>

            <div className="icon-container">
              <a href="https://www.linkedin.com/in/saoud-ali-1b40022b6/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <span className="icon-tooltip">LinkedIn</span>
            </div>
          </div>

        </div>
      </nav>

      {/* PROFILE MODAL */}
      {showProfile && (
        <Profile onClose={() => setShowProfile(false)} />
      )}
    </header>
  );
};

export default Navbar;