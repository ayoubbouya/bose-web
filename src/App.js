import Header from "./navbar/Header";
import Cover from "./cover/Cover";
import SliderCover from "./slider/SliderCover";
import Tabs from "./tabs/Tabs";
import Section1 from "./section1/Section1";
import Section2 from "./premiumDesign/Section2";
import "./App.css";
import Battery from "./battery/Battery";
function App() {
  return (
    <div>
      <Header />
      <Cover />
      <SliderCover />
      <Tabs />
      <Section1 />
      <Section2 />
      <Battery />
    </div>
  );
}

export default App;
