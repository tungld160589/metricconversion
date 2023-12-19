import TypeOfConverticon from "./TypeOfConverticon";
import Areaimg from "../img/Area.png";
import Massimg from "../img/MassIcon.png";
import Volumeimg from "../img/Volume.png";
import Lengthimg from "../img/Lenght.png";
import Currencyimg from "../img/Currency-icon.jpg";
import Temperatureimg from "../img/Temperature.png";
import Timeimg from "../img/Time.png";
import Dataimg from "../img/Data.png";
import ConvertList from "../Data/ConvertList.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export const tempData = [
  { id: 1, type: "Area", image: Areaimg, link: "AreaConvert" },
  { id: 2, type: "Mass", image: Massimg, link: "MassConvert" },
  { id: 3, type: "Volume", image: Volumeimg, link: "VolumeConvert" },
  { id: 4, type: "Length", image: Lengthimg, link: "LengthConvert" },
  { id: 5, type: "Currency", image: Currencyimg, link: "CurrencyConvert" },
  {
    id: 6,
    type: "Temperature",
    image: Temperatureimg,
    link: "TemperatureConvert",
  },
  { id: 7, type: "Time", image: Timeimg, link: "TimeConvert" },
  { id: 8, type: "Data", image: Dataimg, link: "DataConvert" },
];

const TypeofConvers = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(ConvertList);
  const searchHandler = (e) => {
    const text11 = e.target.value;
    setSearchTerm(text11);
    let text = e.target.value.toLowerCase();
    let result = ConvertList.filter((rs) => {
      let search = rs.nameOfUnit.toLowerCase();
      return search.indexOf(text) !== -1;
    });
    setState(result);
  };

  return (
    <div className="typeofconvert-control">
      <div>
        <img src={props.Logo} alt="Logo" />
        <p className="txt-header-typeofconvert">Type of Converters</p>
      </div>
      <div className="typeofconvert-group">
        {tempData.map((rs) => (
          <TypeOfConverticon rs={rs} />
        ))}
      </div>
      <div className="typeofconver-search">
        <input
          value={searchTerm}
          placeholder="Enter unit want to convert"
          onChange={searchHandler}
        />
        {searchTerm && (
          <div className="resultSearch">
            {state.map((rs) => (
              <Link to={`/${rs.type}`}>
                <div>{rs.nameOfUnit}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TypeofConvers;
