import Nav from "../components/Nav";
import Footer from "../components/Footer";
import DataLogo from "../img/Data.png";
import ConvertGraph from "../components/ConvertGraph";
const DataConvert = () => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="convert-top-baner">
        <img src={DataLogo} alt="" />
        <div className="txt-convert-top-baner">
          <p>DATA</p>
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

export default DataConvert;
