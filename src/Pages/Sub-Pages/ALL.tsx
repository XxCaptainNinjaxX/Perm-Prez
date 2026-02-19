import Card from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";

import "./Subpage.css";

const ALLList = [
  {
    duration: "57:11",
    title: "Episode 1",
    thumbnail: "https://i.ytimg.com/vi/kfHCrlVwF_A/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=kfHCrlVwF_A",
  },
  {
    duration: "46:01",
    title: "Episode 2",
    thumbnail: "https://i.ytimg.com/vi/4Nhz4QswAV0/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=4Nhz4QswAV0",
  },

  { duration: "....", title: "Episode 3", thumbnail: "", link: "#" },
  { duration: "....", title: "Episode 4", thumbnail: "", link: "#" },
  { duration: "....", title: "Episode 5", thumbnail: "", link: "#" },
  { duration: "....", title: "Episode 6", thumbnail: "", link: "#" },
  { duration: "....", title: "Episode 7", thumbnail: "", link: "#" },
  { duration: "....", title: "Episode 8", thumbnail: "", link: "#" },
];

export default function ALL() {
  return (
    <div className="category-container">
      <Title name="ALL" />

      <div className="video-grid">
        {ALLList.map((vid, index) => (
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
