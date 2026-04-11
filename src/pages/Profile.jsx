import { useState } from "react";
import "./Profile.css";
import profileImg from "../assets/profile.jpg";
import { X } from "lucide-react";

const Profile = ({ onClose }) => {
  const [viewImage, setViewImage] = useState(false);

  return (
    <>
      {/* MAIN PROFILE MODAL */}
      <div className="pm-overlay" onClick={onClose}>
        <div
          className="pm-card"
          onClick={(e) => e.stopPropagation()}
        >

          {/* CLOSE BUTTON */}
          <button className="pm-close-btn" onClick={onClose}>
            <X size={20} />
          </button>

          {/* PROFILE IMAGE */}
          <img
            src={profileImg}
            alt="profile"
            className="pm-avatar"
            onClick={() => setViewImage(true)}
          />

          {/* INFO */}
          <h1 className="pm-name">Saoud Ali</h1>
          <p className="pm-role">Frontend Developer</p>

          <div className="pm-info">
            <p><strong>Email:</strong> saoud@example.com</p>
            <p><strong>Location:</strong> India</p>
          </div>

        </div>
      </div>

      {/* 🔥 IMAGE FULL VIEW (FIXED) */}
      {viewImage && (
        <div
          className="pm-img-overlay"
          onClick={() => setViewImage(false)}
        >
          {/* 👉 WRAPPER ADD KIYA */}
          <div
            className="pm-img-wrapper"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON (NOW ON IMAGE) */}
            <button
              className="img-close"
              onClick={() => setViewImage(false)}
            >
              <X size={22} />
            </button>

            {/* IMAGE */}
            <img
              src={profileImg}
              alt="full"
              className="pm-full-img"
            />

          </div>
        </div>
      )}
    </>
  );
};

export default Profile;