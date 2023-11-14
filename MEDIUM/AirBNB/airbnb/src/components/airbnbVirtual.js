import AirBnbVirtual from "./logos/airbnb-virtual1.png";

export default function MainContent() {
  return (
    <div className="maincontent">
      <img className="airbnbVirtual" src={AirBnbVirtual}></img>
      <div className="hero-section">
        <h1 className="hero-header">Online Experiences</h1>
        <p className="hero-text">
          Join interactive activities led by one-of-a-kind hosts-all without
          leaving home.
        </p>
      </div>
    </div>
  );
}
