import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LengthLogo from "../img/Lenght.png";
import ConvertGraph from "../components/ConvertGraph";

const LengthConvert = () => {
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
        <ConvertGraph text={"lengthconvert"} />
      </div>
      <div></div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default LengthConvert;
