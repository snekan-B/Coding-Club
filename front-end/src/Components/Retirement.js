import React from "react";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Retirement() {
  const [formData, setFormData] = React.useState({
    name: "",
    age: 0,
    dept: "",
    subject: "",
    reason: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:4000/submit", formData)
      .then((response) => {
        console.log("Server response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <Header />
      <main>
        <h1 className="title">Vacancy Form</h1>
        <form action="">
          <label htmlFor="name">Name</label>
          <br />
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="age">Age</label>
          <br />
          <input
            className="form-control"
            type="Number"
            name="age"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="dept">Department</label>
          <br />
          <input
            className="form-control"
            type="text"
            name="dept"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="subject">Subject Handled</label>
          <br />
          <input
            className="form-control"
            type="text"
            name="subject"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="reason">Reason</label>
          <br />
          <input
            className="form-control"
            type="text"
            name="reason"
            onChange={handleChange}
          />
          <br />

          <button
            type="submit"
            className="btn btn-primary submit-btn"
            onClick={handleSubmit}
          >
            submit
            <Link to="/success"></Link>
          </button>
        </form>
      </main>
    </div>
  );
}
