import "./About.css";

export default function About() {
  return (
    <main className="main-content">
      <br />
      <h1>About Us</h1>
      <br />
      <p className="about-description">
        We here at Prez & Prem podcast brings you exclusive insight into the
        world of sports, politics, music, and much more. Our goal is to provide
        entertaining and informative content that sparks conversation. Join us
        every week as we break down the latest trends and stories.
      </p>

      <section className="team-section">
        <h2>Team</h2>
        <p>This could not be possible without our team:</p>

        <div className="team-grid">
          <div className="team-member">
            <h3>Video Editor</h3>
            <p className="name">Sharad</p>
            <ul className="social-links">
              <li id="social1">
                <a
                  href="https://www.instagram.com/sharadpat06/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="team-member">
            <h3>Web Developer</h3>
            <p className="name">Robert</p>
            <ul className="social-links">
              <li id="social1">
                <a
                  href="https://www.instagram.com/wh0s.r0bert/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Instagram
                </a>
              </li>
              <li id="social2">
                <a
                  href="https://robriguez.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          <div className="team-member">
            <h3>"Prez"</h3>
            <p className="name">Derek</p>
            <ul className="social-links">
              <li id="social1">
                <a
                  href="https://www.instagram.com/derekdudek_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="team-member">
            <h3>"Prem"</h3>
            <p className="name">Sarvesh</p>
            <ul className="social-links">
              <li id="social1">
                <a
                  href="https://www.instagram.com/spk.sarvesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br />

        <div className="more_links">
          <h2>Find more of us:</h2>

          <div className="link-row">
            <a
              href="https://www.youtube.com/@PrezPremPodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn yt"
            >
              Youtube
            </a>

            <a
              href="https://www.instagram.com/prez_and_prem/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn insta"
            >
              Instagram
            </a>

            <a
              href="https://open.spotify.com/show/2NsOwiGU8cagjO7C4noz8L?si=3459c631d39e4164"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn spotify"
            >
              Spotify
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn apple"
            >
              Apple Music
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
