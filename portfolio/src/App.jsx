import "./App.css";
import About from "./About";
import ProfileCard from "./ProfileCard";
import { Element } from "react-scroll";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Contact from "./Contact";

const App = () => {
  return (
    <div className="AppContainer">
      <Navbar />
        <Element name="profile">
          <ProfileCard />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="project">
          <About />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
    </div>
  );
};
export default App;
