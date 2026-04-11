import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCopy
} from "react-icons/fa";

const Contact = () => {

  const activeBtn = useRef(null);
  const formRef = useRef();
  const [success, setSuccess] = useState(false); // ✅ FIXED

  // 🔥 COPY FUNCTION
  const copyText = async (text, e) => {
    const btn = e.currentTarget;
    let copied = false;

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        copied = true;
      } catch {}
    }

    if (!copied) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand("copy");
        copied = true;
      } catch {}

      document.body.removeChild(textarea);
    }

    if (activeBtn.current && activeBtn.current !== btn) {
      activeBtn.current.setAttribute("data-text", "Copy");
    }

    btn.setAttribute("data-text", copied ? "Copied ✓" : "Copy Failed!");
    activeBtn.current = btn;

    setTimeout(() => {
      if (activeBtn.current === btn) {
        btn.setAttribute("data-text", "Copy");
      }
    }, 1500);
  };

  // 🔥 SUBMIT FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_subzy5u",
      "template_k5pp5br",
      formRef.current,
      "2wKhtPflNOGY7eBSb"
    )
    .then(() => {
      setSuccess(true); // ✅ TOAST SHOW
      formRef.current.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    })
    .catch(() => {
      alert("Failed to send ❌");
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">

        {/* LEFT */}
        <div className="contact-left">
          <h2 className="contact-title">Contact Me</h2>

          <p className="contact-subtext">
            Kindly use the details below to get in touch with me.
          </p>

          <div className="contact-info">

            <div className="info-box">
              <FaEnvelope />
              <div>
                <p>Email</p>
                <a href="mailto:saoudali381@email.com" className="info-link">
                  saoudali381@email.com
                </a>
              </div>
              <button
                type="button"
                className="copy-btn"
                data-text="Copy"
                onClick={(e) => copyText("saoudali381@email.com", e)}
              >
                <FaCopy />
              </button>
            </div>

            <div className="info-box">
              <FaPhoneAlt />
              <div>
                <p>Phone</p>
                <a href="tel:+919897158806" className="info-link">
                  +91 9897158806
                </a>
              </div>
              <button
                type="button"
                className="copy-btn"
                data-text="Copy"
                onClick={(e) => copyText("+919897158806", e)}
              >
                <FaCopy />
              </button>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt />
              <div>
                <p>Location</p>
                <a
                  href="https://www.google.com/maps?q=Lucknow,India"
                  target="_blank"
                  rel="noreferrer"
                  className="info-link"
                >
                  Lucknow, India
                </a>
              </div>
            </div>

          </div>

          <div className="contact-socials">
            <a 
              href="https://github.com/saoud786" 
              className="social-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/saoud-ali-1b40022b6/" 
              className="social-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <h3 className="form-title">Send a Message</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">Send Message</button>

          </form>
        </div>

      </div>

      {/* ✅ TOAST UI */}
 {success && (
  <div className="toast-pro">

    {/* ❌ CLOSE BUTTON TOP RIGHT */}
    <button className="toast-close" onClick={() => setSuccess(false)}>
      ✖
    </button>

    <div className="toast-icon">✔</div>

    <div className="toast-body">
      <p className="toast-title">Message Sent Successfully</p>
      <span className="toast-desc">
        Thank you! I’ll get back to you shortly.
      </span>

      <div className="toast-progress"></div>
    </div>

  </div>
)}

    </section>
  );
};

export default Contact;