import ConvertChangeIMG from "../img/preview.png";
import ConvertList from "../Data/ConvertList.json";
import { useState } from "react";
import FactorList from "../Data/FactorList.json";
import Tooltip from "./Tooltip";

const ConvertGraph = (props) => {
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
  const [txtToolTip, setTxtToolTip] = useState("");
  const [visibleToolTip, setVisibleToolTip] = useState(false);
  const [statusL, setStatusL] = useState(false);
  const [statusR, setStatusR] = useState(false);
  const [visibleToolTipRight, setVisibleTooltipRight] = useState(false);

  const selectOptionL = (option) => {
    setSelectedOption(option.nameOfUnit);
    setListVisibleLeft(false);
  };

  const selectOptionR = (option) => {
    setSelectOptionRight(option.nameOfUnit);
    setListVisibleRight(false);
  };
  //Khi Clich vào để hiện danh sách bên Trái
  const toggleListL = () => {
    setListVisibleLeft(!listVisibleLeft);

    //Thực hiện filter theo giá trị sortby để tạo list lựa chọn
    let sortlist = ConvertList.filter((rs) => {
      let search = rs.type.toLowerCase();
      return search.indexOf(sortby) !== -1;
    });

    setleftList(sortlist);
  };
  // Khi Click vào để hiện danh sách bên phải
  const toggleListR = () => {
    setListVisibleRight(!listVisibleRight);
  };
  // Khi Lựa Chọn Danh Sách Bên Trái
  const handleClickLeft = (option) => {
    settxtChooseLeft(option.nameOfUnit);
    setIDSelectLeft(option.id);
    setStatusL(!statusL);
    calOutput(option.id, IDSelectRight, inputLeft);
  };
  //Khi Lựa Chọn Danh Sách Bên Phải
  const handleClickRight = (option) => {
    setIDSelectRight(option.id);
    settxtChooseRight(option.nameOfUnit);
    setStatusR(!statusR);
    calOutput(IDSelectLeft, option.id, inputLeft);
  };
  // Hàm nhân giá trị input với hệ số chuyển đổi nếu input notnull
  const calOutput = (a, b, c) => {
    if (c) {
      let result = c * Factor(a, b);
      setOutputRight(result);
    }
  };
  //Hàm lấy hệ số chuyển đổi
  const Factor = (a, b) => {
    let id = a + b;
    const FactorNum = FactorList.find((item) => item.id === id);
    return FactorNum.factor;
  };
  //Khi thay đổi giá trị input
  const onChangeLeft = (e) => {
    let tempvalue = e.target.value;
    let a = tempvalue * Factor(IDSelectLeft, IDSelectRight);
    setOutputRight(a);
    setInputLeft(tempvalue);
  };
  //Khi lick vào ô input mà chưa lựa chọn giá trị chuyển đổi trái phải
  const handleClickInputLeft = () => {
    if (!statusR) {
      if (!statusL) {
        setTxtToolTip(
          `"Please choose "Unit convert from" and "Unit convert to"`
        );
        setVisibleToolTip(!visibleToolTip);
      } else {
        setTxtToolTip("Please choose Unit convert to");
        setVisibleToolTip(!visibleToolTip);
      }
    }
  };
  // Phải thêm If để ràng buộc tránh trường hợp lỗi khi di chuyển chuột vào ra vung chọn liên tục
  const handleRightMouseLeave = () => {
    if (visibleToolTipRight) setVisibleTooltipRight(!visibleToolTipRight);
  };

  const handleLeftInputMouseLeave = () => {
    if (visibleToolTip) setVisibleToolTip(!visibleToolTip);
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
            <div
              className="tooltip"
              onClick={handleClickInputLeft}
              onMouseLeave={handleLeftInputMouseLeave}
            >
              <input
                className={`input-left ${IDSelectRight || "lock"}`}
                type="number"
                value={inputLeft}
                onChange={onChangeLeft}
              />
              {visibleToolTip && (
                <div>
                  <Tooltip text={txtToolTip} />
                </div>
              )}
            </div>
          </div>
        </div>
        {/*---------------------------------Right------------------------------------*/}
        <div className="bg-convert-right-control">
          <div className="convert-right-control">
            <div
              className="txt-convert-right tooltip"
              onClick={() => {
                toggleListR();
                if (!IDSelectLeft) {
                  setVisibleTooltipRight(!visibleToolTipRight);
                }
              }}
              onMouseLeave={handleRightMouseLeave}
            >
              <span>{selectOptionRight || "Choose Unit Convert To:"}</span>
              <div className={`arrow-icon ${listVisibleRight ? "open" : ""}`}>
                {" "}
                &#11167;
              </div>
              {listVisibleRight && IDSelectLeft && (
                <ul className="list-unit-convert right-list">
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
              {visibleToolTipRight && (
                <Tooltip text={"Please Choose Unit Convert From !"} />
              )}
            </div>
            <div className="output-right" type="text">
              {outputRight}
            </div>
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
