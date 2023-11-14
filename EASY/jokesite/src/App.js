import Jokes from "./jokes";

function App() {
  return (
    <div className="App">
      <Jokes
        setup="My wife told me to stop acting like a flamingo."
        punchline=" had to put my foot down."
      />
      <Jokes
        setup="Why are gay people always smiling?"
        punchline="Because they can’t keep a straight face."
      />
      <Jokes
        setup="What’s the dumbest animal in the jungle?"
        punchline="A polar bear."
      />
      <Jokes
        setup="A naked guy just dunked his balls in glitter."
        punchline="That’s pretty nuts."
      />
      <Jokes
        setup="Why do scuba divers jump backwards out of the boat?"
        punchline="Because if they jumped forward, they’d still be in the boat."
      />
      <Jokes punchline="A Mexican magician told his audience he was going to vanish on the count of three. He counted, “Uno, dos…” and disappeared without a tres." />
    </div>
  );
}

export default App;
