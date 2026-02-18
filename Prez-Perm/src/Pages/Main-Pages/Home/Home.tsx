import "../Home/Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 id="title">Prez & Prem Videos</h1>

      <div className="video-grid">
        <NavLink to="/NBA" className="grid-item">
          NBA
        </NavLink>
        <NavLink to="./page/NFL.html" className="grid-item">
          NFL
        </NavLink>
        <NavLink to="./page/politics.html" className="grid-item">
          Politics
        </NavLink>
        <NavLink to="./page/music.html" className="grid-item">
          Music
        </NavLink>
        <NavLink to="./page/interviews.html" className="grid-item">
          Interviews
        </NavLink>
        <NavLink to="./page/other.html" className="grid-item">
          Other
        </NavLink>
        <NavLink to="./page/all.html" className="grid-item">
          ALL
        </NavLink>
      </div>
    </>
  );
}
