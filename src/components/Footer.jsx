import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";
const Footer = () => {
  return (
    <div className="footer-control">
      <div className="fter-1">
        <img src={Logo} alt="logo" />
        <p>Copyright © 2023 </p>
        <p>by Tung & Nguyen</p>
        <p> All Rights Reserved </p>
      </div>
      <div className="fter-2">
        <p>Converter</p>
        <ul>
          <Link to={"/AreaConvert"}>
            <li>Area</li>
          </Link>
          <Link to={"/MassConvert"}>
            <li>Mass</li>
          </Link>
          <Link to={"/VolumeConvert"}>
            <li>Volume</li>
          </Link>
          <Link to={"/LengthConvert"}>
            <li>Length</li>
          </Link>
          <Link to={"/CurrencyConvert"}>
            <li>Currency</li>
          </Link>
          <Link to={"/TemperatureConvert"}>
            <li>Temperature</li>
          </Link>
          <Link to={"/TimeConvert"}>
            <li>Time</li>
          </Link>
          <Link to={"/DataConvert"}>
            <li>Data</li>
          </Link>
        </ul>
      </div>
      <div className="fter-3">
        <p>Short Link</p>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/Article"}>
            <li>Article</li>
          </Link>
          <Link to={"/Aboutus"}>
            <li>About us</li>
          </Link>
        </ul>
      </div>
      <div className="fter-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.6367461852377!2d106.71035313610372!3d10.845938589141555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175286e2b4a7c21%3A0x55acea98813bc7b1!2zNjIgxJDGsOG7nW5nIDM2LCBIaeG7h3AgQsOsbmggUGjGsOG7m2MsIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1702439171853!5m2!1svi!2s"
          width={250}
          height={250}
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
