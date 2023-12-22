import ConvertChangeIMG from "../img/preview.png";
import ConvertListData from "../Data/ConvertList.json";
import { useState } from "react";
const ConvertGraph = (props) => {
  const [data, setData] = useState([]);
  const text = props;
  const result = ConvertListData.filter((rs) => {
    let search = rs.type.toLowerCase();
    return search.indexOf(text) !== -1;
  });
  setData(result);
  return (
    <div className="convertgraph-control">
      <div className="convert-left-control">
        <div className="txt-convert-left">Chọn loại convert from</div>
        <input
          className="input-left"
          type="text"
          placeholder="gia tri convert"
        />
      </div>
      <div className="convert-right-control">
        <div className="txt-convert-right">Chọn loại convert to</div>
        <input
          className="output-right"
          type="text"
          placeholder="ket qua chuyển đổi"
        />
      </div>
      <div className="convert-change-img">
        <img src={ConvertChangeIMG} alt="" />
      </div>
      <div className="convert-result"></div>
    </div>
  );
};

export default ConvertGraph;
