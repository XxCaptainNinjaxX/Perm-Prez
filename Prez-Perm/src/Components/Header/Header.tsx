import { NavLink, Link } from "react-router-dom";
import "./Header.css";

import logoImg from "../../assets/prez&permpfp-modified.png";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <Link to="/Home" className="logo">
          <div className="logo-circle">
            <img src={logoImg} id="icon" alt="logo" />
          </div>
        </Link>
      </div>

      <div className="header-center">
        <nav className="nav-main">
          <ul>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Donations"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Donations
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav className="nav-secondary">
          <ul>
            <li id="apple">
              <a href="#">Apple Music</a>
            </li>
            <li id="listen-live">&lt;- Listen Live! -&gt;</li>
            <li id="spotify">
              <a
                href="https://open.spotify.com/show/2NsOwiGU8cagjO7C4noz8L?si=3459c631d39e4164"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
