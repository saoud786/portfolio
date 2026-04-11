import { useEffect, useState } from "react";
import "./Hero.css";
import profileImg from "../assets/profile.jpg";

const Hero = () => {

  const fullText = "Hi, I'm Saoud Ali";

  const [displayText, setDisplayText] = useState("");
  const [i, setI] = useState(0);

  // 👉 Image modal state
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (i < fullText.length) {
      const speed = i < 10 ? 90 : 130;

      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, i + 1));
        setI(i + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [i]);

  // 👉 ESC key se close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">

          <div className="hero-status top">
            <span className="dot"></span>
            Open for Work
          </div>

          <h1 className="hero-name">
            {displayText.slice(0, 7)}
            <span className="name-highlight">
              {displayText.slice(7)}
            </span>
            <span className="cursor"></span>
          </h1>

          <h2 className="hero-role">
            Frontend Developer
          </h2>

          <p className="hero-desc">
            I build modern and high-performance web applications using React.
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="btn primary">
              View Projects
            </a>

          <a 
  href="/resume.pdf" 
  download="Saoud_Ali_Resume.pdf"
  className="btn secondary"
>
  Download Resume
</a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div 
            className="image-wrapper"
            onClick={() => setShowModal(true)}
          >
            <img src={profileImg} alt="Saoud Ali" />
          </div>
        </div>

      </div>

      {/* ✅ FULLSCREEN MODAL */}
     {showModal && (
  <div className="image-modal" onClick={() => setShowModal(false)}>
    
    <div 
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >

      <button 
        className="close-btn"
        onClick={() => setShowModal(false)}
      >
        ✕
      </button>

      <img 
        src={profileImg} 
        alt="Full View"
        className="modal-img"
      />

    </div>

  </div>
)}
    </section>
  );
};

export default Hero;