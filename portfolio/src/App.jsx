import "./App.css";
import About from "./About";
import ProfileCard from "./ProfileCard";
import Form from "./Form";
import { Element } from "react-scroll";
import Navbar from "./Navbar";


const App = () => {
  return (
    <div className="AppContainer">
      <Navbar />
     <Element name="profile"><ProfileCard /></Element>
     <Element name="about"><About /></Element>
     <Element name="contact"><Form /></Element>

    </div>
  );
};
export default App;
