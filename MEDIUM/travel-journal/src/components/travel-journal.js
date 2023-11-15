export default function TravelJournal(props) {
  return (
    <div className="travel-journal">
      <img src={`../img/${props.item.imgURL}`} className="travel-image"></img>
      <div className="content-header">
        <img className="location-logo" src=""></img>
        <p className="location">{props.item.location}</p>
        <a className="google-map-link" href={props.item.googleMapLink}>
          View on Google map
        </a>
      </div>
      <h2 className="title">{props.item.title}</h2>
      <b>
        {props.item.startDate} - {props.item.endDate}
      </b>
      <p className="description">{props.item.description}</p>
    </div>
  );
}
