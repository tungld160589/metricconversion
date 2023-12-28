import ConvertChangeIMG from "../img/preview.png";
import ConvertList from "../Data/ConvertList.json";
import { useState } from "react";
import FactorList from "../Data/FactorList.json";
const ConvertGraph = (props) => {
  const [convertunit, setConvertUnit] = useState(ConvertList);
  const { sortby } = props;
  const [leftList, setleftList] = useState();
  const [listVisibleLeft, setListVisibleLeft] = useState(false);
  const [listVisibleRight, setListVisibleRight] = useState(false);
  const [selectOptionRight, setSelectOptionRight] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputLeft, setInputLeft] = useState("");
  const [outputRight, setOutputRight] = useState();
  const [txtChooseRight, settxtChooseRight] = useState();
  const [txtChooseLeft, settxtChooseLeft] = useState();
  const [IDSelectLeft, setIDSelectLeft] = useState();
  const [IDSelectRight, setIDSelectRight] = useState();

  const selectOptionL = (option) => {
    setSelectedOption(option.nameOfUnit);
    setListVisibleLeft(false);
  };

  const selectOptionR = (option) => {
    setSelectOptionRight(option.nameOfUnit);
    setListVisibleRight(false);
  };

  const toggleListL = () => {
    setListVisibleLeft(!listVisibleLeft);
    let sortlist = convertunit.filter((rs) => {
      let search = rs.type.toLowerCase();
      return search.indexOf(sortby) !== -1;
    });
    setleftList(sortlist);
  };

  const toggleListR = () => {
    setListVisibleRight(!listVisibleRight);
  };

  const handleClickLeft = (option) => {
    settxtChooseLeft(option.nameOfUnit);
    setIDSelectLeft(option.id);
    calOutput(option.id, IDSelectRight, inputLeft);
  };

  const handleClickRight = (option) => {
    setIDSelectRight(option.id);
    settxtChooseRight(option.nameOfUnit);
    calOutput(option.id, IDSelectLeft, inputLeft);
  };

  const calOutput = (a, b, c) => {
    if (c) {
      let result = c * Factor(a, b);
      setOutputRight(result);
    }
  };

  const Factor = (a, b) => {
    let id = a + b;
    const FactorNum = FactorList.find((item) => item.id === id);
    return FactorNum.factor;
  };

  const onChangeLeft = (e) => {
    let tempvalue = e.target.value;
    let a = tempvalue * Factor(IDSelectLeft, IDSelectRight);
    setOutputRight(a);
    setInputLeft(tempvalue);
  };

  return (
    <div className="convertgraph-control">
      <div className="bg-group-convert-control">
        <div className="bg-convert-left-control">
          <div>
            <div className="convert-left-control">
              <div className="txt-convert-left" onClick={toggleListL}>
                <span>{selectedOption || "Choose Unit Convert From:"}</span>
                <div className={`arrow-icon ${listVisibleLeft ? "open" : ""}`}>
                  &#11167;
                </div>
                {listVisibleLeft && (
                  <ul className="list-unit-convert">
                    {leftList.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          selectOptionL(option);
                          handleClickLeft(option);
                        }}
                      >
                        {option.nameOfUnit}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <input
              className={`input-left ${IDSelectRight || "lock"}`}
              type="number"
              value={inputLeft}
              onChange={onChangeLeft}
            />
          </div>
        </div>
        <div className="bg-convert-right-control">
          <div className="convert-right-control">
            <div className="txt-convert-right" onClick={toggleListR}>
              <span>{selectOptionRight || "Choose Unit Convert To:"}</span>
              <div className={`arrow-icon ${listVisibleRight ? "open" : ""}`}>
                {" "}
                &#11167;
              </div>
              {listVisibleRight && IDSelectLeft && (
                <ul className="list-unit-convert">
                  {leftList.map((option, indexR) => (
                    <li
                      key={indexR}
                      onClick={() => {
                        selectOptionR(option);
                        handleClickRight(option);
                      }}
                    >
                      {option.nameOfUnit}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <input
              className="output-right"
              type="text"
              value={outputRight}
            ></input>
          </div>
        </div>
        <div className="convert-change-img">
          <img src={ConvertChangeIMG} alt="" />
        </div>
        <div className="convert-result">
          <span>Result:</span>
          <span>
            {outputRight &&
              `${inputLeft} ${txtChooseLeft}  = ${outputRight} ${txtChooseRight}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConvertGraph;
