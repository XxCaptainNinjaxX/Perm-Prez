import Card from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";

import "./Subpage.css";

const OtherList = [
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },

  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
  { duration: "....", title: "-----", thumbnail: "", link: "#" },
];

export default function Other() {
  return (
    <div className="category-container">
      <Title name="Other" />

      <div className="video-grid">
        {OtherList.map((vid, index) => (
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
