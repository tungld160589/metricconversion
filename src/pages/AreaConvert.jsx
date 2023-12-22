import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ConvertGraph from "../components/ConvertGraph";
import Arealogo from "../img/Area.png";
const AreaConvert = () => {
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
        <ConvertGraph />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AreaConvert;
