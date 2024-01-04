import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ConvertGraph from "../components/ConvertGraph";
import Arealogo from "../img/Area.png";
import AreaContent from "../components/AreaContent";
import ClickToTop from "../components/ClickToTop";
import { useEffect } from "react";
const AreaConvert = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="convert-top-baner">
        <img src={Arealogo} alt="" />
        <div className="txt-convert-top-baner">
          <p>AREA</p>
          <p>Converter</p>
        </div>
      </div>

      <div>
        <ConvertGraph sortby="areaconvert" />
      </div>
      <div className="convert-content">
        <AreaContent />
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

export default AreaConvert;
