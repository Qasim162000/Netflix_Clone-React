import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PageBreak from "./UI/PageBreak";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <PageBreak />
    </div>
  );
}

export default App;
