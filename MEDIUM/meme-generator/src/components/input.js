import React from "react";

export default function InputArea() {
  let [meme, setMeme] = React.useState({
    toptext: "",
    bottomtext: "",
    randomImg: "https://i.imgflip.com/30b1gx.jpg",
  });

  function changeForm(event) {
    let { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  let [allMemeImage, setMemeImg] = React.useState();

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeImg(data.data.memes));
  });

  function GenerateMeme() {
    let randomMeme = Math.floor(Math.random() * allMemeImage.length);
    let url = allMemeImage[randomMeme].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
  }
  return (
    <main>
      <div className="input-area">
        <input
          type="text"
          className="form-input"
          value={meme.toptext}
          name="toptext"
          onChange={changeForm}
        />
        <input
          className="form-input"
          type="text"
          value={meme.bottomtext}
          name="bottomtext"
          onChange={changeForm}
        />
        <input
          type="button"
          className="button"
          value="Get a new meme image 🖼️"
          onClick={GenerateMeme}
        ></input>
      </div>
      <div className="meme">
        <img src={meme.randomImg} className="meme-img" alt="name"></img>
        <h2 className="meme--text top">{meme.toptext}</h2>
        <h2 className="meme--text bottom">{meme.bottomtext}</h2>
      </div>
    </main>
  );
}
