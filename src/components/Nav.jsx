import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";

const Nav = () => {
  return (
    <div className="nav-control">
      <div className="logo-control">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="logotxt">
          <p>Unit</p>
          <p>Converter</p>
        </div>
      </div>
      <div className="link-control">
        <ul className="link-group">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <div className="dropdown">
            <Link>
              <li className="converts-menu-drop">Converters</li>
            </Link>

            <div className="nav-drop-menu">
              <Link to={"/AreaConvert"}>
                <div>Area Convert</div>
              </Link>
              <Link to={"/MassConvert"}>
                <div>Mass Convert</div>
              </Link>
              <Link to={"/VolumeConvert"}>
                <div>Volume Convert</div>
              </Link>
              <Link to={"/LengthConvert"}>
                <div>Length Convert</div>
              </Link>
              <Link to={"/CurrencyConvert"}>
                <div>Currency Convert</div>
              </Link>
              <Link to={"/TemperatureConvert"}>
                <div>Temperature Convert</div>
              </Link>
              <Link to={"/TimeConvert"}>
                <div>Time Convert</div>
              </Link>
              <Link to={"/DataConvert"}>
                <div>Data Convert</div>
              </Link>
            </div>
          </div>

          <Link to={"/Article"}>
            <li>Article</li>
          </Link>
          <Link to={"/Aboutus"}>
            <li>About us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
