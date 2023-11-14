import ExperienceSection from "./experiences";
import data from "./data";

export default function Experiences() {
  let experienceElement = data.map((d) => {
    return (
      <ExperienceSection
        key={d.id}
        img={d.coverImg}
        currentRating={d.stats.rating}
        totalRating={d.stats.reviewCount}
        country={d.location}
        cardTitle={d.title}
        rate={d.price}
      />
    );
  });
  return <div className="card-section">{experienceElement}</div>;
}
