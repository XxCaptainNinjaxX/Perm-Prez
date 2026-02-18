import Card from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";

import "./Subpage.css";

const InterviewsList = [
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },

  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
];

export default function Interviews() {
  return (
    <div className="category-container">
      <Title name="Interviews" />

      <div className="video-grid">
        {InterviewsList.map((vid, index) => (
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
