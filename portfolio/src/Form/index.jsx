import "./index.css";

const Form = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <h1>Contact Details</h1>
        <div className="name-container">
          <label htmlFor="name">Name :</label>
          <br />
          <input type="text" id="name" className="inputContainer" />
        </div>
        <div className="number-container">
          <label htmlFor="number">Number:</label>
          <br />
          <input type="text" id="number" className="inputContainer" />
        </div>
      </div>
    </div>
  );
};

export default Form;
