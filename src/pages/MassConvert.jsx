import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MassLogo from "../img/MassIcon.png";
import ConvertGraph from "../components/ConvertGraph";
import MassContent from "../components/MassContent";
import ClickToTop from "../components/ClickToTop";
const MassConvert = () => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="convert-top-baner">
        <img src={MassLogo} alt="" />
        <div className="txt-convert-top-baner">
          <p>MASS</p>
          <p>Converter</p>
        </div>
      </div>

      <div>
        <ConvertGraph sortby="massconvert" />
      </div>
      <div className="convert-content">
        <MassContent />
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

export default MassConvert;
