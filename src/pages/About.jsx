import { useEffect, useRef, useState } from "react";
import "./About.css";

const About = () => {

  const aboutRef = useRef();
  const [visible, setVisible] = useState(false);

  const stats = [
    { title: "5+", label: "Projects" },
    { title: "React", label: "Core" },
    { title: "UI/UX", label: "Focus" }
  ];

  // ✅ Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={aboutRef} className={`about ${visible ? "show" : ""}`} id="about">

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">

          <h2 className="about-title">About Me</h2>

          <h3 className="about-intro">
            I'm <span className="name-highlight">Saoud Ali</span>, a React Frontend Developer building modern and scalable web applications.
          </h3>

          <p className="about-text">
            I specialize in building responsive and user-friendly interfaces using React and modern JavaScript. 
            I focus on writing clean, maintainable code and creating smooth user experiences.
          </p>

          <p className="about-text">
            My goal is to develop high-performance web applications that not only look great but also provide real value to users.
          </p>

          <p className="about-text">
            Currently pursuing MCA from Amity University, Noida and continuously improving my skills by working on real-world projects.
          </p>

          {/* 🔥 NEW SECTION: MY EXPERTISE */}
          <h3 className="extra-heading">My Expertise</h3>

          <div className="about-extra">

            <div className="extra-box">
              <h4>Frontend Development</h4>
              <p>Building responsive and modern web applications using React and JavaScript.</p>
            </div>

            <div className="extra-box">
              <h4>UI/UX Design</h4>
              <p>Creating clean, intuitive, and user-friendly interfaces with great user experience.</p>
            </div>

            <div className="extra-box">
              <h4>Performance Optimization</h4>
              <p>Ensuring fast loading, smooth performance, and optimized web applications.</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          <div className="profile-card">

            {/* HEADER */}
            <div className="card-top">
              <h3>Overview</h3>
              <p>Frontend Developer</p>
            </div>

            {/* EDUCATION */}
            <div className="card-box">
              <h4>Education</h4>

              <div className="edu-row">
                <div>
                  <strong>BCA</strong>
                  <p>Integral University</p>
                </div>
                <span>2021 — 2024</span>
              </div>

              <div className="edu-row">
                <div>
                  <strong>MCA</strong>
                  <p>Amity University</p>
                </div>
                <span>2024 — Present</span>
              </div>
            </div>

            {/* STATS */}
            <div className="card-box stats-box">
              {stats.map((item, index) => (
                <div key={index}>
                  <h4>{item.title}</h4>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;