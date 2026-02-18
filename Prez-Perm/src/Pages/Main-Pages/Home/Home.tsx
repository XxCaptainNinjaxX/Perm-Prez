import "../Home/Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 id="title">Prez & Prem Videos</h1>

      <div className="home-grid">
        <NavLink to="/NBA" className="grid-item">
          NBA
        </NavLink>
        <NavLink to="NFL.html" className="grid-item">
          NFL
        </NavLink>
        <NavLink to="politics.html" className="grid-item">
          Politics
        </NavLink>
        <NavLink to="music.html" className="grid-item">
          Music
        </NavLink>
        <NavLink to="interviews.html" className="grid-item">
          Interviews
        </NavLink>
        <NavLink to="other.html" className="grid-item">
          Other
        </NavLink>
        <NavLink to="all.html" className="grid-item">
          ALL
        </NavLink>
      </div>
    </>
  );
}
