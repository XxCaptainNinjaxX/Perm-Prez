import Card from "../../Components/Card/Card";
import "./Subpage.css";

const NBAList = [
  {
    duration: "57:11",
    title: "Episode 1",
    thumbnail: "https://i.ytimg.com/vi/kfHCrlVwF_A/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=kfHCrlVwF_A",
  },
  {
    duration: "46:01",
    title: "Preseason NBA Eastern Confrence",
    thumbnail: "https://i.ytimg.com/vi/4Nhz4QswAV0/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=4Nhz4QswAV0",
  },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
];

export default function NBA() {
  return (
    <div className="category-container">
      <h1 className="main-title">Prez & Prem Videos</h1>
      <h2 className="section-title">NBA Videos</h2>

      <div className="video-grid">
        {NBAList.map((vid, index) => (
          <Card
            key={index}
            duration={vid.duration}
            title={vid.title}
            thumbnail={vid.thumbnail}
            link={vid.link}
          />
        ))}
      </div>
    </div>
  );
}
