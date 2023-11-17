import TravelJournal from "./travel-journal";
import data from "./data";

export default function Content() {
  let journalContent = data.map((content) => {
    return <TravelJournal key={content.id} item={content} />;
  });
  return <div className="card-section">{journalContent}</div>;
}
