import Swimmer from "./logos/swimmerpic.png";
import Star from "./logos/Star.png";
export default function ExperienceSection() {
  return (
    <div className="experience-section">
      <div className="swimmer-section">
        <img src={Swimmer} className="swimmer-pic"></img>

        <p className="card-rating">
          <img src={Star} className="star-pic"></img>5.0{" "}
          <span style={{ color: "#918E9B" }}>(6) USA</span>
        </p>
        <p className="card-title">Life lessons with Katie Zaferes</p>
        <p className="rate">From $136 / person </p>
      </div>
    </div>
  );
}
