import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import JodiChartPage from "./components/screens/JodiChartPage";
import PanelChartPage from "./components/screens/PanelChartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="record/jodi" element={<JodiChartPage />} />
      <Route path="record/panel" element={<PanelChartPage />} />
      <Route path="about-us" element={<></>} />
      <Route path="contact" element={<></>} />
      <Route path="privacy-policy" element={<></>} />
      <Route path="disclaimer" element={<></>} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
