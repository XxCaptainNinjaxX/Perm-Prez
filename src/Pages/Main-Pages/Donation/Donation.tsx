import { NavLink } from "react-router-dom";
import "./Donation.css";

export default function Donation() {
  return (
    <main className="main-content">
      <br />
      <h1>Donations</h1>

      <p className="about-description">
        <br />
        While we appreciate the kindness of donating, this page is currently
        under development.
        <br />
        <br />
        <br />
        Please feel free to use the rest of the Webpage.
      </p>
      <div className="home">
        <NavLink to="/Home">Home Page</NavLink>
      </div>
    </main>
  );
}
