import css from "./Options.module.css";

export default function Option({ onUpdate }) {
  return (
    <>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
    </>
  );
}
