import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ConvertGraph from "../components/ConvertGraph";
import VolumeLogo from "../img/Volume.png";
import VolumeContent from "../components/VolumeContent";
import ClickToTop from "../components/ClickToTop";
import { useEffect } from "react";
const VolumeConvert = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="convert-top-baner">
        <img src={VolumeLogo} alt="" />
        <div className="txt-convert-top-baner">
          <p>VOLUME</p>
          <p>Converter</p>
        </div>
      </div>

      <div>
        <ConvertGraph sortby="volumeconvert" />
      </div>
      <div className="convert-content">
        <VolumeContent />
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

export default VolumeConvert;
