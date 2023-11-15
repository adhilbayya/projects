import Star from "./logos/Star.png";

export default function ExperienceSection(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="experience-section">
      {badgeText && <div className="card-status">{badgeText}</div>}
      <img
        src={`../img/${props.item.coverImg}`}
        className="picture-section"
      ></img>

      <p className="card-rating">
        <img src={Star} className="star-pic"></img>
        {props.item.stats.rating}
        <span style={{ color: "#918E9B" }}>
          &nbsp;({props.item.stats.reviewCount}) • {props.item.location}
        </span>
      </p>
      <p className="card-title">{props.item.title}</p>
      <p className="rate">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
