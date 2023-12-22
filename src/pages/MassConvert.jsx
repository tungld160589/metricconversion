import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MassLogo from "../img/MassIcon.png";
import ConvertGraph from "../components/ConvertGraph";
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
        <ConvertGraph />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MassConvert;
