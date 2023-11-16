export default function TravelJournal(props) {
  return (
    <div className="travel-journal">
      <img src={`../img/${props.item.imgURL}`} className="travel-image"></img>
      <div className="content-header">
        <p className="location">
          <img
            className="location-logo"
            src="../img/locationlogo.png"
            width="13px"
          ></img>
          {props.item.location}
          <a className="google-map-link" href={props.item.googleMapLink}>
            View on Google map
          </a>
        </p>
        <h2 className="title">{props.item.title}</h2>
        <div className="bottom-section">
          <b>
            {props.item.startDate} - {props.item.endDate}
          </b>
          <p className="description">{props.item.description}</p>
          <input type="checkbox" className="expand-button"></input>
        </div>
      </div>
    </div>
  );
}
