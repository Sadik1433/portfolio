import "./index.css";
import { FaJava } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
const Skills = () => {
  return (
    <div className="skills-maincontainer">
      <h1 className="skills-head">My Skills</h1>
      <div className="skills-para">
          <p className="para-text">Proficient in HTML,CSS,and Javascript.<br />I design and develop captivating web application with seamless functionality.<br />
          I bring modern , responsive designs to life ensuring a polished and user-friendly experience</p>
      </div>
      <div className="skills-container">
        <div className="icon-container">
          <p>
            <FaJava size={75} />
          </p>
          <span>Java</span>
        </div>
        <div className="icon-container">
          <p>
            <FaPython size={75} />
          </p>
          <span>Python</span>
        </div>
        <div className="icon-container">
          <p>
            <FaReact size={75} />
          </p>
          <span>React</span>
        </div>
        <div className="icon-container">
          <p>
            <SiMysql size={75} />
          </p>
          <span>Sql</span>
        </div>
        <div className="icon-container">
          <p>
            <IoLogoJavascript size={75} />
          </p>
          <span>Javascript</span>
        </div>
        <div className="icon-container">
          <p>
            <TiHtml5 size={75} />
          </p>
          <span>Html</span>
        </div>
        <div className="icon-container">
          <p>
            <FaCss3Alt size={75} />
          </p>
          <span>Css</span>
        </div>
      </div>
    </div>
  );
};
export default Skills;
