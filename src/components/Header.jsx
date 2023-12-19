import imgConvert from "../img/preview.png";
const Header = () => {
  return (
    <div className="header-control">
      <p className="header-title">Common unit converters</p>
      <div className="header-group">
        <img src={imgConvert} alt="imageConvert" />
        <div className="header-txt-content">
          <p>
            Unit conversion is the process of converting a quantity expressed in
            one unit to another. This is done with conversion
            factors—multipliers that express the relationship between the
            original unit and the desired unit. For example, you can use a
            conversion factor to convert a volume measurement in gallons to
            liters or vice versa.
          </p>
          <p>
            This page contains calculators you can use to perform unit
            conversions for a variety of measurement types, including common
            conversions such as those for length, volume, mass and currency as
            well as conversions for engineering, fluid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
