import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LengthLogo from "../img/Lenght.png";
import ConvertGraph from "../components/ConvertGraph";
import LenghtContent from "../components/LengthContent";
import ClickToTop from "../components/ClickToTop";
import { useEffect } from "react";
const LengthConvert = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="convert-top-baner">
        <img src={LengthLogo} alt="" />
        <div className="txt-convert-top-baner">
          <p>LENGTH</p>
          <p>Converter</p>
        </div>
      </div>
      <div>
        <ConvertGraph sortby="lengthconvert" />
      </div>
      <div className="convert-content">
        <LenghtContent />
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

export default LengthConvert;
