import css from "./Options.module.css";

export default function Option({ handleFeeedback }) {
  return (
    <>
      <button onClick={handleFeeedback}>Good</button>
      <button onClick={handleFeeedback}>Neutral</button>
      <button onClick={handleFeeedback}>Bad</button>
    </>
  );
}
