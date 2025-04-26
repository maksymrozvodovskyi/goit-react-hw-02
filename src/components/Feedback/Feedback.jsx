export default function Feedback({ value, total, procent }) {
  return (
    <>
      <p>Good: {value.good}</p>
      <p>Neutral: {value.neutral}</p>
      <p>Bad: {value.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {procent}%</p>
    </>
  );
}
