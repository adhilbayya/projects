import memesData from "./memesData";

export default function InputArea() {
  function generateMeme() {
    let meme = memesData.data.memes;
    let randomMeme = Math.floor(Math.random() * meme.length);
    let url = meme[randomMeme].url;
    console.log(url);
  }
  return (
    <main>
      <div className="input-area">
        <input type="text" className="first-input" value="Top line"></input>
        <input className="second-input" type="text" value="Bottom line"></input>
        <input
          type="button"
          className="button"
          value="Get a new meme image 🖼️"
          onClick={generateMeme}
        ></input>
      </div>
    </main>
  );
}
