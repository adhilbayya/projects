import Header from "./components/header";
import MainContent from "./components/airbnbVirtual";
import ExperienceSection from "./components/experiences";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <ExperienceSection
        img="../img/swimmer.png"
        currentRating="5.0"
        totalRating="6"
        country="USA"
        cardTitle="Life lessons with Katie Zaferes"
        rate="136"
      />
      <ExperienceSection
        img="../img/wedding-pic.jpg"
        currentRating="5.0"
        totalRating="30"
        country="USA"
        cardTitle="Learn wedding photography"
        rate="125"
      />
    </div>
  );
}

export default App;
