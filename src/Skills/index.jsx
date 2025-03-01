import "./index.css";
import { FaJava } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
const Skills = () => {
  return (
    <div className="skills-maincontainer">
      <div className="skills-container">
        <h1 className="skills-head">Skills</h1>
        <p className="icon-container">
          <FaJava size={45} />
        </p>

        <p className="icon-container">
          <FaReact size={45} />
        </p>
        <p className="icon-container">
          <TiHtml5 size={45} />
        </p>
        <p className="icon-container">
          <FaCss3Alt size={45} />
        </p>
        <p className="icon-container">
          <FaPython size={45} />
        </p>
        <span className="lang-text">HTML</span>
        <span className="lang-text">JAVA</span>
        <span className="lang-text">REACT</span>
        <span className="lang-text">JAVA</span>
        <span className="lang-text">JAVA</span>
      </div>
    </div>
  );
};
export default Skills;
