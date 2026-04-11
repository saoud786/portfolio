import "./Skills.css";
import { FaCode, FaDatabase, FaTools, FaLightbulb } from "react-icons/fa";

const Skills = () => {
  const data = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"]
    },
    {
      title: "Backend & Database",
      icon: <FaDatabase />,
      skills: ["Firebase", "Firestore", "Authentication", "REST APIs" ]
    },
    {
      title: "Tools & Workflow",
      icon: <FaTools />,
      skills: ["Git", "GitHub", "VS Code", "Chrome DevTools"]
    },
    {
      title: "Core Concepts",
      icon: <FaLightbulb />,
      skills: ["UI/UX Design", "Performance Optimization", "Clean Code"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        {/* HEADER */}
        <div className="skills-header">
          <h2>Skills</h2>
          <p>
            I use modern tools and technologies to build scalable, 
            high-performance web applications.
          </p>
        </div>

        {/* GRID */}
        <div className="skills-grid">
          {data.map((item, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-header">
                <span className="skill-icon">{item.icon}</span>
                <h3>{item.title}</h3>
              </div>
              <div className="skill-tags">
                {item.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;