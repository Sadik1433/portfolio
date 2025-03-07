import SocialMedia from "../SocialMedia";
import Skills from '../Skills'
import "./index.css";

const ProfileCard = () => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dnarxeess/image/upload/v1741190393/edited-removebg-preview_exrydb.png"
          alt="profile-image"
          className="img"
        />
      </div>
      <div className="text-container">
        <h1 className="profile-text">
          Hi, I am <span className="profile-name">Sadik</span> 👋
        </h1>
        <br />
        <p className="para-container">
          I'm a passionate Web Developer with expertise in React, Java, python.
          I love building intuitive and efficient solutions that make a
          difference.
        </p>
        <div className="icons-container">
          <SocialMedia />
        </div>
        <div>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
