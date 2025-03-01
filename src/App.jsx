import "./App.css";
// import About from "./About";
import ProfileCard from "./ProfileCard";
// import Contact from "./Contact";
import Navbar from "./Navbar";


const App = () => {
  return (
    <div className="AppContainer">
      <Navbar />
      <div> 
        <ProfileCard />
      </div>
    </div>
  );
};
export default App;
