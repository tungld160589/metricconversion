import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ConvertGraph from "../components/ConvertGraph";
import CurrencyLogo from "../img/Currency-icon.jpg";
const CurrencyConvert = () => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="convert-top-baner">
        <img src={CurrencyLogo} alt="" />
        <div className="txt-convert-top-baner">
          <p>CURRENCY</p>
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

export default CurrencyConvert;
