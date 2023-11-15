import ExperienceSection from "./experiences";
import data from "./data";

export default function Experiences() {
  let experienceElement = data.map((d) => {
    return <ExperienceSection key={d.id} item={d} />;
  });
  return <div className="card-section">{experienceElement}</div>;
}
