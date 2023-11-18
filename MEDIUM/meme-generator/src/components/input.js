import memesData from "./memesData";
import React from "react";

export default function InputArea() {
  let [meme, setMeme] = React.useState({
    toptext: "",
    bottomtext: "",
    randomImg: "https://i.imgflip.com/30b1gx.jpg",
  });

  let [allMemeImage, setMemeImg] = React.useState(memesData);

  function GenerateMeme() {
    let memeArr = allMemeImage.data.memes;
    let randomMeme = Math.floor(Math.random() * memeArr.length);
    let url = memeArr[randomMeme].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
  }
  return (
    <main>
      <div className="input-area">
        <input type="text" className="form-input" value="Top line"></input>
        <input className="form-input" type="text" value="Bottom line"></input>
        <input
          type="button"
          className="button"
          value="Get a new meme image 🖼️"
          onClick={GenerateMeme}
        ></input>
      </div>
      <img src={meme.randomImg} className="meme-img" alt="name"></img>
    </main>
  );
}
