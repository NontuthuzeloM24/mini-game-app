export default function StartScreen({ onStart }) {
  return (
    <div>
      <h1>Word Game</h1>
      <button onClick={onStart}>Start</button>
    </div>
  );
}