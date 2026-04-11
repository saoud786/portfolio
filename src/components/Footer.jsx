import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
   <p className="footer-text">
  © {new Date().getFullYear()} Saoud Ali. Designed and developed by Saoud Ali.
</p>

        {/* RIGHT */}
        <div className="footer-socials">
    
        </div>

      </div>
    </footer>
  );
};

export default Footer;