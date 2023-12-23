import ConvertChangeIMG from "../img/preview.png";
import ConvertList from "../Data/ConvertList.json";
import { useState } from "react";
const ConvertGraph = (props) => {
  const [convertunit, setConvertUnit] = useState(ConvertList);
  const { sortby } = props;
  const [leftList, setleftList] = useState();
  const [rightList, setRightList] = useState();
  const [listVisible, setListVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectOption = (option) => {
    setSelectedOption(option);
    setListVisible(false);
  };
  const toggleList = () => {
    setListVisible(!listVisible);
    let sortlist = convertunit.filter((rs) => {
      let search = rs.type.toLowerCase();
      return search.indexOf(sortby) !== -1;
    });
    setleftList(sortlist);
  };
  return (
    <div className="convertgraph-control">
      <div className="bg-group-convert-control">
        <div className="bg-convert-left-control">
          <div>
            <div className="convert-left-control">
              <div className="txt-convert-left" onClick={toggleList}>
                <span>{selectedOption || "Choose Unit Convert To:"}</span>
                <div className={`arrow-icon ${listVisible ? "open" : ""}`}>
                  &#11167;
                </div>
              </div>
              {listVisible && (
                <ul className="list-container">
                  {leftList.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => selectOption(option.nameOfUnit)}
                    >
                      {option.nameOfUnit}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <input
              className="input-left"
              type="text"
              placeholder="gia tri convert"
            />
          </div>
        </div>
        <div className="bg-convert-right-control">
          <div className="convert-right-control">
            <div className="txt-convert-right">
              <p>Choose unit convert to</p> <p>&#11167;</p>
            </div>
            <input
              className="output-right"
              type="text"
              placeholder="ket qua chuyển đổi"
            />
          </div>
        </div>
        <div className="convert-change-img">
          <img src={ConvertChangeIMG} alt="" />
        </div>
        <div className="convert-result"></div>
      </div>
      {/* <div className="convert-left-control">
        <div className="txt-convert-left">
          <p>Choose unit convert</p>
          <p>&#11167;</p>
        </div>
        <input
          className="input-left"
          type="text"
          placeholder="gia tri convert"
        />
      </div>
      <div className="convert-right-control">
        <div className="txt-convert-right">
          <p>Choose unit convert to</p> <p>&#11167;</p>
        </div>
        <input
          className="output-right"
          type="text"
          placeholder="ket qua chuyển đổi"
        />
      </div> */}
    </div>
  );
};

export default ConvertGraph;
