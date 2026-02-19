import "./Title.css";

interface CardProp {
  name: String;
}

export default function Card(props: CardProp) {
  return (
    <>
      <h1> Prez & Prem Videos</h1>
      <h2> {props.name} Videos</h2>
    </>
  );
}
