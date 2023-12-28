import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ConvertGraph from "../components/ConvertGraph";
import CurrencyLogo from "../img/Currency-icon.jpg";
import CurremcyContent from "../components/CurencyContent";
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
        <ConvertGraph sortby="currencyconvert" />
      </div>
      <div className="convert-content">
        <CurremcyContent />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CurrencyConvert;
