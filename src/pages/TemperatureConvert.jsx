import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ConvertGraph from "../components/ConvertGraph";
import TemperatureLogo from "../img/Temperature.png";
import TemperatureContent from "../components/TemperatureContent";
import ClickToTop from "../components/ClickToTop";
import { useEffect } from "react";
const TemperatureConvert = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="convert-top-baner">
        <img src={TemperatureLogo} alt="" />
        <div className="txt-convert-top-baner">
          <p>TEMPERATURE</p>
          <p>Converter</p>
        </div>
      </div>

      <div>
        <ConvertGraph sortby="temperatureconvert" />
      </div>
      <div className="convert-content">
        <TemperatureContent />
      </div>
      <div>
        <Footer />
      </div>
      <div className="click-to-top-control">
        <ClickToTop />
      </div>
    </>
  );
};

export default TemperatureConvert;
