import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SI1 from "../img/SI1.png";
import SI2 from "../img/SI2.png";
import { Link } from "react-router-dom";
import ClickToTop from "../components/ClickToTop";
import { useEffect } from "react";
const Art_SI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="Art">
        <p>Article- SI Units</p>
        {/* <input className="Art-Search" type="text" placeholder="Enter Article" /> */}
      </div>
      <div className="Art-Unit">
        <div>
          <img style={{ width: "100%", height: "100%" }} src={SI1} alt="SI1" />
        </div>
      </div>
      <div>
        <h3>Introduction</h3>
      </div>
      <div className="Us_In">
        <h5>
          The International System of Units (SI) is the modern form of the
          metric system and is the world's most widely used system of
          measurement. It is used in both everyday life and in scientific
          research and industry. The SI system provides a consistent and
          standardized set of units for expressing physical quantities. Here are
          some key features of the SI system:
        </h5>
      </div>
      <div className="Us">
        <h5>1. Base Units:</h5>
        . Length: Meter (m) <br />
        . Mass: Kilogram (kg) <br />
        . Time: Second (s) <br />
        . Electric current: Ampere (A) <br />
        . Temperature: Kelvin (K) <br />
        . Amount of substance: Mole (mol) <br />
        . Luminous intensity: Candela (cd) <br />
        <img src={SI2} alt="SI2" />
      </div>

      <div className="Us">
        <h5>2. Derived Units:</h5>
        Derived units are formed by combining the base units. For example, the
        unit of speed is meters per second (m/s), which is derived from the base
        units of length and time.
      </div>

      <div className="Us">
        <h5>3. Prefixes:</h5>
        The SI system uses prefixes to denote multiples or fractions of the base
        units. For example, kilo- (k) means a thousand times, milli- (m) means a
        thousandth, and so on.
      </div>
      <div className="Us">
        <h5>4. Coherent System:</h5>
        The units in the SI system are coherent, meaning that equations relating
        the units have no numerical constants. For example, the formula for
        kinetic energy is KE=12��2KE=, where KEKE is in joules, �m is in
        kilograms, and �v is in meters per second.
      </div>
      <div className="Us">
        <h5>5. International Prototype of the Kilogram:</h5>
        Until recently, the kilogram was defined by a physical prototype called
        the International Prototype of the Kilogram (IPK). However, the
        definition has been updated, and the kilogram is now defined in terms of
        fundamental constants.
      </div>
      <div className="Us">
        <h5>6. Constants:</h5>
        The revised SI system, adopted in 2019, defines certain base units using
        fundamental constants of nature. For example, the kilogram is now
        defined in terms of the Planck constant.
      </div>

      <div className="Us">
        <h3>Conclusion:</h3>
        <br />
        The SI system is continually refined and updated to ensure that it
        remains a precise and accurate system for measurement. It provides a
        common language for scientists and engineers worldwide, facilitating
        communication and ensuring consistency in measurements across different
        fields and applications.
      </div>
      <div className="btnback">
        <Link to={"/Article"}>
          <button>Back</button>
        </Link>
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

export default Art_SI;
