import ConvertChangeIMG from "../img/preview.png";
import ConvertList from "../Data/ConvertList.json";
import { useState } from "react";
import FactorList from "../Data/FactorList.json";
const ConvertGraph = (props) => {
  const [convertunit, setConvertUnit] = useState(ConvertList);
  const { sortby } = props;
  const [leftList, setleftList] = useState();
  const [rightList, setRightList] = useState();
  const [listVisible, setListVisible] = useState(false);
  const [listVisibleRight, setListVisibleRight] = useState(false);
  const [selectOptionRight, setSelectOptionRight] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputLeft, setInputLeft] = useState(null);
  const [chooseLeft, setChooseLeft] = useState(null);
  const [chooseRight, setChooseRight] = useState(null);
  const [outputRight, setOutputRight] = useState();
  const [txtChooseRight, settxtChooseRight] = useState();
  const [txtChooseLeft, settxtChooseLeft] = useState();
  //Truyền biến option để kiểm tra thuộc tính hiển thị và lựa chọn của list box bên trái
  const selectOption = (option) => {
    setSelectedOption(option);
    setListVisible(false);
  };
  //Truyền biến option để kiểm tra thuộc tính hiển thị và lựa chọn của list box bên phải
  const selectOptionR = (option) => {
    setSelectOptionRight(option);
    setListVisibleRight(false);
  };
  // hiển thị list box bên trái
  const toggleList = () => {
    setListVisible(!listVisible);
    /*lọc ra giá trị list bên trái theo giá trị sortby truyền vào*/
    let sortlist = convertunit.filter((rs) => {
      let search = rs.type.toLowerCase();
      return search.indexOf(sortby) !== -1;
    });
    setleftList(sortlist);
    // kiểm tra giá trị lựa chọn bên phải và tự tính kê quả
    {
      chooseRight && setOutputRight(inputLeft * getFactorNum());
    }
  };
  // Clcik vào chuyển trạng thái của visible để hiển thị listbox bên phải
  const toggleListR = () => {
    setListVisibleRight(!listVisibleRight);
    {
      inputLeft && setOutputRight(inputLeft * getFactorNum());
    }
  };
  //Lọc ra giá trị list bên phải bỏ qua giá trị đã chọn bên trái
  const handleClickLeft = (option) => {
    setChooseLeft(option.id);
    const updatedUnitList = leftList.filter(
      (e) => e.nameOfUnit !== option.nameOfUnit
    );
    setRightList(updatedUnitList);
  };
  // Lọc ra hệ số chuyển đổi
  const getFactorNum = () => {
    let filterValue = chooseLeft + chooseRight;
    const FactorObject = FactorList.find((item) => item.id == filterValue);
    let a = FactorObject.factor;
    return a;
  };
  // khi thay đổi giá trị input bên trái
  const onChangeLeft = (e) => {
    let tempvalue = e.target.value;
    let a = getFactorNum() * tempvalue;
    setOutputRight(a);
    setInputLeft(tempvalue);
  };
  // const invertedClick = () => {
  //   let temp = chooseLeft;
  //   setChooseLeft(chooseRight);
  //   setChooseRight(temp);
  //   let temptxt = txtChooseRight;
  //   settxtChooseRight(txtChooseLeft);
  //   settxtChooseLeft(temptxt);
  //   let a = getFactorNum() * inputLeft;
  //   setOutputRight(a);
  // };
  return (
    <div className="convertgraph-control">
      <div className="bg-group-convert-control">
        <div className="bg-convert-left-control">
          <div>
            <div className="convert-left-control">
              <div className="txt-convert-left" onClick={toggleList}>
                <span>{selectedOption || "Choose Unit Convert From:"}</span>
                <div className={`arrow-icon ${listVisible ? "open" : ""}`}>
                  &#11167;
                </div>
                {listVisible && (
                  <ul className="list-unit-convert">
                    {leftList.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          handleClickLeft(option);
                          selectOption(option.nameOfUnit);
                          settxtChooseLeft(option.nameOfUnit);
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
              className={`input-left ${chooseRight || "lock"}`} //nếu lựa chọn  bên phải = null thì sẽ khoá ô input bên trái
              type="number"
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
                {/*giá trị lisvisible = true thì xoay nut muổi tên */}
                &#11167;
              </div>
              {listVisibleRight &&
                chooseLeft && ( //nếu Listvisible = fale sẽ thục hiện hiển thị in danh sách bên phải
                  <ul className="list-unit-convert">
                    {rightList.map((optionR, indexR) => (
                      <li
                        key={indexR}
                        onClick={() => {
                          selectOptionR(optionR.nameOfUnit);
                          setChooseRight(optionR.id);
                          settxtChooseRight(optionR.nameOfUnit);
                        }}
                      >
                        {optionR.nameOfUnit}
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
        <div
          className="convert-change-img"
          // onClick={inputLeft && invertedClick}
        >
          <img src={ConvertChangeIMG} alt="" />
        </div>
        <div className="convert-result">
          <span>Result:</span>
          <span>
            {outputRight &&
              `${inputLeft} ${txtChooseLeft} = ${outputRight} ${txtChooseRight}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConvertGraph;
