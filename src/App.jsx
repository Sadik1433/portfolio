import "./App.css";
import About from "./About";
import ProfileCard from "./ProfileCard";
import Form from "./Form";
// import Contact from "./Contact";
import Navbar from "./Navbar";
import Skills from "./Skills";

const App = () => {
  return (
    <div className="AppContainer">
      <Navbar />
      <ProfileCard />
      <Skills />
      <About />
      <Form />
    </div>
  );
};
export default App;
