import "./App.css";
import About from "./About";
import ProfileCard from "./ProfileCard";
// import Contact from "./Contact";
import Navbar from "./Navbar";
import Skills from "./Skills";

const App = () => {
  return (
    <div className="AppContainer">
      <Navbar />
      <div>
        <ProfileCard />
        <Skills />
        <About />
      </div>
    </div>
  );
};
export default App;
