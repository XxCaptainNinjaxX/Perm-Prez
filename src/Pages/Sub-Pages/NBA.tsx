import Card from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";

import "./Subpage.css";
const noVid = "https://www.youtube.com/@PrezPremPodcast";

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
  { duration: "....", title: "-----", thumbnail: "", link: noVid },
  { duration: "....", title: "-----", thumbnail: "", link: noVid },
  { duration: "....", title: "-----", thumbnail: "", link: noVid },
  { duration: "....", title: "-----", thumbnail: "", link: noVid },
  { duration: "....", title: "-----", thumbnail: "", link: noVid },
  { duration: "....", title: "-----", thumbnail: "", link: noVid },
];

export default function NBA() {
  return (
    <div className="category-container">
      <Title name="NBA" />

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
