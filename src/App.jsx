import "./App.css";
// import About from "./About";
// import ProfileCard from "./ProfileCard";
// import Contact from "./Contact";
import Navbar from "./Navbar";
import About from "./About"

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <About /> 
        {/* <ProfileCard />
        <About />
        <Contact /> */}
      </div>
    </>
  );
};
export default App;
