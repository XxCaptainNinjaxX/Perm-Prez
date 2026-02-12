import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <a href="../index.html" className="logo">
          <div className="logo-circle">
            <img src="../pics/prez&permpfp-modified.png" id="icon" alt="logo" />
          </div>
        </a>
      </div>

      <div className="header-center">
        <nav className="nav-main">
          <ul>
            <li>
              <a href="../main/about.html">About us</a>
            </li>
            <li>
              <a href="../index.html">Videos</a>
            </li>
            <li>
              <a href="../main/donations.html">Donations</a>
            </li>
            {/* br *2 */}
          </ul>
        </nav>
        <nav className="nav-secondary">
          <ul>
            <li id="apple">
              <a href="#">Apple Music</a>
            </li>
            <li id="listen-live">Listen Live!</li>
            <li id="spotify">
              <a
                href="https://open.spotify.com/show/2NsOwiGU8cagjO7C4noz8L?si=3459c631d39e4164"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* <div className="header-right">
        <div className="auth-links">
          <a href="#">Sign in / login</a>
        </div>
      </div>  */}
    </header>
  );
}
