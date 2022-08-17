import "./App.css";
import HeroSection from "./components/HeroSection";
import HomePage2 from "./components/HomePage2";
import Navbar from "./components/Navbar";
import PageBreak from "./UI/PageBreak";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <PageBreak />
      <HomePage2 />
    </div>
  );
}

export default App;
