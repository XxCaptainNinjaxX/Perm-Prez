import Card from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";

import "./Subpage.css";

const MusicList = [
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },

  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
];

export default function Music() {
  return (
    <div className="category-container">
      <Title name="Music" />

      <div className="video-grid">
        {MusicList.map((vid, index) => (
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
