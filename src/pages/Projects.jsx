import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

import emoImg from "../assets/emo.png";
import portImg from "../assets/port.png";
import weatherImg from "../assets/weather.png";
import gameImg from "../assets/gamemind.png"; // ✅ NEW IMAGE

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    {
      title: "EmoConnect",
      desc: "Real-time anonymous chat app with AI-based moderation system.",
      details: [
        "Anonymous real-time chat",
        "AI abuse detection",
        "Admin moderation dashboard",
        "User ban/unban system",
        "Firebase backend"
      ],
      tech: ["React", "Firebase", "Firestore", "Auth"],
      image: emoImg,
      live: "https://emo-connect-ten.vercel.app/",
      github: "https://github.com/saoud786/EmoConnect"
    },
      {
      title: "GameMind",
      desc: "Interactive brain game app to improve memory, focus, and thinking skills.",
      details: [
        "Memory & logic based games",
        "Score tracking system",
        "Smooth UI interactions",
        "Responsive design",
        "Engaging gameplay experience"
      ],
      tech: ["React", "JavaScript", "CSS"],
      image: gameImg,
      live: "https://game-mind-iota.vercel.app/",
      github: "https://github.com/saoud786/GameMind"
    },

    {
      title: "Weather App",
      desc: "Real-time weather app using API integration.",
      details: [
        "Live weather API",
        "City search feature",
        "Temperature display",
        "Clean UI",
        "Fast response"
      ],
      tech: ["JavaScript", "API", "HTML", "CSS"],
      image: weatherImg,
      live: "https://weather-app-seven-kappa-26.vercel.app/",
      github: "https://github.com/saoud786/Weather-App"
    },
    {
      title: "Portfolio Website",
      desc: "Modern responsive portfolio with dark theme and light theme.",
      details: [
        "Fully responsive design",
        "Dark/light mode toggle",
        "Smooth UI animations",
        "Modern layout",
        "Project showcase system"
      ],
      tech: ["React", "CSS", "Responsive Design"],
      image: portImg,
      live: "https://portfolio-ec6ksvh1q-saoudali381-2113s-projects.vercel.app/",
      github: "https://github.com/saoud786/portfolio"
    },
    // 🔥 NEW PROJECT
  
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-header">
          <h2>Projects</h2>
          <p>Some of my recent work showcasing my skills and experience.</p>
        </div>

        <div className="projects-grid">
          {data.map((item, index) => (
            <div className="project-card" key={index}>

              <div className="project-img">
                <img src={item.image} alt={item.title} />

                {activeIndex === index && (
                  <div className="project-overlay">
                    <ul>
                      {item.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="title-row">
                  <h3>{item.title}</h3>

                  <button
                    className="info-btn"
                    onClick={() => toggleDetails(index)}
                  >
                    i
                    <span className="tooltip">Details</span>
                  </button>
                </div>

                <p>{item.desc}</p>

                <div className="project-tech">
                  {item.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={item.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <FaGithub /> Code
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;