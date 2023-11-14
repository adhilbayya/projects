import Header from "./components/header";
import MainContent from "./components/airbnbVirtual";
import ExperienceSection from "./components/experiences";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <ExperienceSection
        img="swimmer.png"
        currentRating="5.0"
        totalRating={6}
        country="USA"
        cardTitle="Life lessons with Katie Zaferes"
        rate={136}
      />
      <ExperienceSection
        img="wedding-pic.jpg"
        currentRating="5.0"
        totalRating={30}
        country="USA"
        cardTitle="Learn wedding photography"
        rate={125}
      />
      <ExperienceSection
        img="mountain-bike1.png"
        currentRating={4.8}
        totalRating={3}
        country="USA"
        cardTitle="Group Mountain Biking"
        rate={50}
      />
    </div>
  );
}

export default App;
