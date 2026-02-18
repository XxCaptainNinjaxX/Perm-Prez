import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // This function flips the state from true to false, or false to true.
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <aside className={`sidebar ${isOpen ? "" : "closed"}`} id="sidebar">
        <div className="sidebar-header">
          <h2>Categories</h2>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/all">All</NavLink>
            </li>
            <li>
              <NavLink to="/nba">🏀 NBA</NavLink>
            </li>
            <li>
              <NavLink to="/nfl">🏈 NFL</NavLink>
            </li>
            <li>
              <NavLink to="/politics">📝 Politics</NavLink>
            </li>
            <li>
              <NavLink to="/music">🎵 Music</NavLink>
            </li>
            <li>
              <NavLink to="/interviews">🗣️ Interviews</NavLink>
            </li>
            <li>
              <NavLink to="/other">Other</NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="sidebar-toggle-container">
        <span
          className="hamburger-icon"
          id="sidebarToggle"
          onClick={toggleSidebar}
        >
          ☰
        </span>
      </div>
    </>
  );
}
