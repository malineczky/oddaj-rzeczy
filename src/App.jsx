import "./App.scss";
import HomeHeader from "./components/HomeHeader";
import HomeThreeColumn from "./components/HomeThreeColumns";
import HomeSteps from "./components/HomeSteps";
import HomeAboutUs from "./components/HomeAboutUs";
import HomeWhoWeHelp from "./components/HomeWhoWeHelp";
import HomeForm from "./components/HomeForm";

function App() {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumn />
      <HomeSteps />
      <HomeAboutUs />
      <HomeWhoWeHelp />
      <HomeForm />
    </>
  );
}
export default App;
