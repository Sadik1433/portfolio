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
      <h1 className="skills-head">Skills</h1>
      <div className="skills-container">
        <div className="icon-container">
          <p>
            <FaJava size={45} />
          </p>
          <span>Java</span>
        </div>
        <div className="icon-container">
          <p>
            <FaPython size={45} />
          </p>
          <span>Python</span>
        </div>
        <div className="icon-container">
          <p>
            <FaReact size={45} />
          </p>
          <span>React</span>
        </div>
        <div className="icon-container">
          <p>
            <SiMysql size={45} />
          </p>
          <span>Sql</span>
        </div>
        <div className="icon-container">
          <p>
            <IoLogoJavascript size={45} />
          </p>
          <span>Javascript</span>
        </div>
        <div className="icon-container">
          <p>
            <TiHtml5 size={45} />
          </p>
          <span>Html</span>
        </div>
        <div className="icon-container">
          <p>
            <FaCss3Alt size={45} />
          </p>
          <span>Css</span>
        </div>
      </div>
    </div>
  );
};
export default Skills;
