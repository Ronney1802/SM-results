import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import JodiChartPage from "./components/screens/JodiChartPage";
import PanelChartPage from "./components/screens/PanelChartPage";
import About from "./components/screens/About";
import Contact from "./components/screens/Contact";
import PrivacyPolicy from "./components/screens/PrivacyPolicy";
import Disclaimer from "./components/screens/Disclaimer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="record/jodi" element={<JodiChartPage />} />
      <Route path="record/panel" element={<PanelChartPage />} />
      <Route path="about-us" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="disclaimer" element={<Disclaimer />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
