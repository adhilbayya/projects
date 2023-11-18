import memesData from "./memesData";
import React from "react";

export default function InputArea() {
  let [memeImage, setMemeImg] = React.useState("");
  function GenerateMeme() {
    let meme = memesData.data.memes;
    let randomMeme = Math.floor(Math.random() * meme.length);
    let url = meme[randomMeme].url;
    setMemeImg(url);
  }
  return (
    <main>
      <div className="input-area">
        <input type="text" className="form-input" value="Top line"></input>
        <input className="sform-input" type="text" value="Bottom line"></input>
        <input
          type="button"
          className="button"
          value="Get a new meme image 🖼️"
          onClick={GenerateMeme}
        ></input>
      </div>
      <img src={memeImage} className="meme-img"></img>
    </main>
  );
}
