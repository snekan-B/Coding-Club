import logo from "./college.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="text-center header">
      <h3>
        Faculty<span className="blue">in</span>
      </h3>
      <img src={logo} alt="" />

      <Link className="link " to="/form">
        <Button className="btn btn-primary ms-5  app-btn" type="submit">
          Application Form
        </Button>
      </Link>
      <Link className="link " to="/retirement">
        <Button className="btn btn-primary ms-3" type="submit">
          Vacancy
        </Button>
      </Link>
    </header>
  );
}
