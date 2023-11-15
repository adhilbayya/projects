import TravelJournal from "./travel-journal";
import data from "./data";

export default function Content() {
  let journalContent = data.map((content) => {
    return <TravelJournal id={content.id} item={content} />;
  });
  return { journalContent };
}
