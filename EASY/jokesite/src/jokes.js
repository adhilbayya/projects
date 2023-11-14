export default function Jokes({ setup, punchline }) {
  return (
    <div>
      {setup && <h3 className="setup">{setup}</h3>}
      <p className="punchline">{punchline}</p>
      <hr></hr>
    </div>
  );
}
