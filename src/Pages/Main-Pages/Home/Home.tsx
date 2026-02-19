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
        <NavLink to="/NFL" className="grid-item">
          NFL
        </NavLink>
        <NavLink to="/politics" className="grid-item">
          Politics
        </NavLink>
        <NavLink to="/music" className="grid-item">
          Music
        </NavLink>
        <NavLink to="/interviews" className="grid-item">
          Interviews
        </NavLink>
        <NavLink to="/other" className="grid-item">
          Other
        </NavLink>
        <NavLink to="/all" className="grid-item">
          ALL
        </NavLink>
      </div>
    </>
  );
}
