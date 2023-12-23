import ConvertChangeIMG from "../img/preview.png";
import ConvertList from "../Data/ConvertList.json";
import { useState } from "react";
const ConvertGraph = (props) => {
  const [convertunit, setConvertUnit] = useState(ConvertList);
  const { sortby } = props;
  const [leftList, setleftList] = useState();
  const [rightList, setRightList] = useState();
  const [listVisible, setListVisible] = useState(false);
  const [listVisibleRight, setListVisibleRight] = useState(false);
  const [selectOptionRight, setSelectOptionRight] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
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
  };
  // Clcik vào chuyển trạng thái của visible để hiển thị listbox bên phải
  const toggleListR = () => {
    setListVisibleRight(!listVisibleRight);
  };
  //Lọc ra giá trị list bên phải bỏ qua giá trị đã chọn
  const handleClickLeft = (option) => {
    const updatedUnitList = leftList.filter((e) => {
      let unitChoose = option.nameOfUnit.toLowerCase();
      return e.nameOfUnit !== option.nameOfUnit;
    });
    setRightList(updatedUnitList);
  };
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
                          selectOption(option.nameOfUnit);
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
              className="input-left"
              type="text"
              placeholder="gia tri convert"
            />
          </div>
        </div>
        <div className="bg-convert-right-control">
          <div className="convert-right-control">
            <div className="txt-convert-right" onClick={toggleListR}>
              <span>{selectOptionRight || "Choose Unit Convert To:"}</span>
              <div className={`arrow-icon ${listVisibleRight ? "open" : ""}`}>
                &#11167;
              </div>
              {listVisibleRight && (
                <ul className="list-unit-convert">
                  {rightList.map((optionR, indexR) => (
                    <li
                      key={indexR}
                      onClick={() => {
                        selectOptionR(optionR.nameOfUnit);
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
              placeholder="ket qua chuyển đổi"
            />
          </div>
        </div>
        <div className="convert-change-img">
          <img src={ConvertChangeIMG} alt="" />
        </div>
        <div className="convert-result"></div>
      </div>
    </div>
  );
};

export default ConvertGraph;
