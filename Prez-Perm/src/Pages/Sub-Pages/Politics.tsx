import Card from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";

import "./Subpage.css";

const PoliticsList = [
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },

  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
];

export default function Politics() {
  return (
    <div className="category-container">
      <Title name="Politics" />

      <div className="video-grid">
        {PoliticsList.map((vid, index) => (
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
