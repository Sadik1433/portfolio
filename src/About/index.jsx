import Project from "../Project";
import "./index.css";

const blogsdata = [
  {
    id: 1,
    projectName: "Shopee",
    description:
      "I'm a passionate [Your Profession, e.g., Web Developer, UI/UX Designer, Software Engineer]",
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1740319048/shoppee_mku4is.jpg",
  },
  {
    id: 2,
    projectName: "Emoji",
    description:
      "I'm a passionate [Your Profession, e.g., Web Developer, UI/UX Designer, Software Engineer]",
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1740319048/shoppee_mku4is.jpg",
  },
  {
    id: 3,
    projectName: "Shopee",
    description:
      "I'm a passionate [Your Profession, e.g., Web Developer, UI/UX Designer, Software Engineer]",
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1740319048/shoppee_mku4is.jpg",
  },
  {
    id: 4,
    projectName: "Shopee",
    description:
      "I'm a passionate [Your Profession, e.g., Web Developer, UI/UX Designer, Software Engineer]",
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1740319048/shoppee_mku4is.jpg",
  },

];

const About = () => {
  return (
    <div className="about-container">
      <div className="blogContainer">
        <ul className="listItems"> 
          {blogsdata.map((each) => (
            <Project blog={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
