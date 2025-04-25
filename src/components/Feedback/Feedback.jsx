import css from "./Feedback.module.css";

export default function Feedback({ value: { good, neutral, bad } }) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </>
  );
}
