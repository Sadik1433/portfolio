import Project from "../Project";
import "./index.css";

const blogsdata = [
  {
    id: 1,
    projectName: "Shopee",
    description: "Reactjs, html, css",
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1740319048/shoppee_mku4is.jpg",
  },
  {
    id: 2,
    projectName: "Emoji Game",
    description: "Reactjs, html, css",
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1741363538/emoji_at6n3q.jpg",
  },
  {
    id: 3,
    projectName: "Job Search",
    description: "Reactjs, html, css",
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1741363587/jobby_ng8zz5.jpg",
  },
  {
    id: 4,
    projectName: "Todolist",
    description: "Html, Css, Javscript",
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1741363759/todolist_xrpccx.jpg",
  },
];

const About = () => {
  return (
    <div className="about-container">
      <h1 className="project-title">Projects</h1>
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
