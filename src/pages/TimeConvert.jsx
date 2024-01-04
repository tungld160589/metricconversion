import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ConvertGraph from "../components/ConvertGraph";
import TimeLogo from "../img/Time.png";
import ClickToTop from "../components/ClickToTop";
import TimeContent from "../components/TimeContent";
import { useEffect } from "react";
const TimeConvert = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="convert-top-baner">
        <img src={TimeLogo} alt="" />
        <div className="txt-convert-top-baner">
          <p>TIME</p>
          <p>Converter</p>
        </div>
      </div>

      <div>
        <ConvertGraph sortby="timeconvert" />
      </div>
      <div className="convert-content">
        <TimeContent />
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

export default TimeConvert;
