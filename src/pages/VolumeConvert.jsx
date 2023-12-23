import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ConvertGraph from "../components/ConvertGraph";
import VolumeLogo from "../img/Volume.png";
const VolumeConvert = () => {
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
      <div>
        <Footer />
      </div>
    </>
  );
};

export default VolumeConvert;
