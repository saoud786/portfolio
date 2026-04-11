import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import emoImg from "../assets/emo.png";
import portImg from "../assets/port.png";
import weatherImg from "../assets/weather.png"; // 👈 add weather image

const Projects = () => {
  const data = [
    {
      title: "EmoConnect",
      desc: "Real-time anonymous chat app with AI-based moderation system.",
      features: [
    
      ],
      tech: ["React", "Firebase", "Firestore", "Auth"],
      image: emoImg,
      live: "https://emo-connect-ten.vercel.app/",
      github: "https://github.com/saoud786/EmoConnect"
    },
    {
      title: "Portfolio Website",
      desc: "Modern responsive portfolio with dark theme and light theme.",
      features: [
        
      ],
      tech: ["React", "CSS", "Responsive Design"],
      image: portImg,
      live: "https://portfolio-ec6ksvh1q-saoudali381-2113s-projects.vercel.app/",
      github: "https://github.com/saoud786/portfolio"
    },
    {
      title: "Weather App",
      desc: "Real-time weather app using API integration.",
      features: [
      
      ],
      tech: ["JavaScript", "API", "HTML", "CSS"],
      image: weatherImg,
      live: "#",
      github: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* HEADER */}
        <div className="projects-header">
          <h2>Projects</h2>
          <p>Some of my recent work showcasing my skills and experience.</p>
        </div>

        {/* GRID */}
        <div className="projects-grid">
          {data.map((item, index) => (
            <div className="project-card" key={index}>

              {/* IMAGE */}
              <div className="project-img">
                <img src={item.image} alt={item.title} />
              </div>

              {/* CONTENT */}
              <div className="project-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                {/* 🔥 FEATURES */}
                <ul className="project-features">
                  {item.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

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