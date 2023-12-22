import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AreaConvert from "./pages/AreaConvert";
import Article from "./pages/Article";
import CurrencyConvert from "./pages/CurrencyConvert";
import DataConvert from "./pages/DataConvert";
import LengthConvert from "./pages/LengthConvert";
import MasConvert from "./pages/MassConvert";
import TemperatureConvert from "./pages/TemperatureConvert";
import TimeConvert from "./pages/TimeConvert";
import VolumeConvert from "./pages/VolumeConvert";
import Aboutus from "./pages/Aboutus";
import Art_Meter from "./pages/Art_Meter"
import Art_Metric from "./pages/Art_Metric"
import Art_USMetriction from "./pages/Art_USMetriction"
import Art_SI from "./pages/Art_SI"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AreaConvert" element={<AreaConvert />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/CurrencyConvert" element={<CurrencyConvert />} />
          <Route path="/DataConvert" element={<DataConvert />} />
          <Route path="/LengthConvert" element={<LengthConvert />} />
          <Route path="/MassConvert" element={<MasConvert />} />
          <Route path="/TemperatureConvert" element={<TemperatureConvert />} />
          <Route path="/TimeConvert" element={<TimeConvert />} />
          <Route path="/VolumeConvert" element={<VolumeConvert />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Art_Meter" element={<Art_Meter />} />
          <Route path="/Art_Metric" element={<Art_Metric />} />
          <Route path="/Art_USMetriction" element={<Art_USMetriction/>} />
          <Route path="/Art_SI" element={<Art_SI/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
