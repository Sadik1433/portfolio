import "./index.css";

const Form = () => {
  return (
    <div className="form-container">
      <form className="input-form">
        <div className="input-container">
          <label htmlFor="name">Name:- </label> <br />
          <input type="text" id="name" className="inputelement" placeholder="Name"/>
        </div>
        <div className="input-container">
        <label htmlFor="number">Number:- </label> <br />
          <input type="text" id="number" className="inputelement" placeholder="Number"/>
        </div>
        <div className="input-container">
        <label htmlFor="email">Email:- </label> <br />
          <input type="email" id="email" className="inputelement" placeholder="@gmail.com"/>
        </div>
        <div className="input-container">
          <textarea name="textArea" rows="5" cols="28" className="inputelement" placeholder="your message">

          </textarea>
        </div>
        <div className="btnContainer">
          <button className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
