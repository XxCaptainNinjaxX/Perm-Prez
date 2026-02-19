import "./Card.css";

interface CardProps {
  duration: string;
  title: string;
  thumbnail: string;
  link: string;
}

export default function Card({ duration, title, thumbnail, link }: CardProps) {
  return (
    <a
      href={link}
      className="video-card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="video-thumbnail">
        {thumbnail ? (
          <img src={thumbnail} alt={title} />
        ) : (
          <span>Coming soon!</span>
        )}
      </div>

      <div className="video-info">
        <span className="video-tag">{title}</span>
        <span className="video-views">{duration}</span>
      </div>
    </a>
  );
}
