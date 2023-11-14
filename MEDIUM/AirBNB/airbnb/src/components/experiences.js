import Star from "./logos/Star.png";
export default function ExperienceSection(props) {
  return (
    <div className="experience-section">
      <div className="swimmer-section">
        <img src={`../img/${props.img}`} className="picture-section"></img>

        <p className="card-rating">
          <img src={Star} className="star-pic"></img>
          {props.currentRating}
          <span style={{ color: "#918E9B" }}>
            &nbsp;({props.totalRating}) • {props.country}
          </span>
        </p>
        <p className="card-title">{props.cardTitle}</p>
        <p className="rate">
          <span className="bold">From ${props.rate}</span> / person
        </p>
      </div>
    </div>
  );
}
