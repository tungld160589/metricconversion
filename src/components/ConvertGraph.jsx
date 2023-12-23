import ConvertChangeIMG from "../img/preview.png";
import ConvertListData from "../Data/ConvertList.json";
import { useState } from "react";
const ConvertGraph = (props) => {
  // const [result, setResult] = useState();
  // const [txtResult, setTxtResult] = useState();
  // setTxtResult = "Con ga con hehehe";
  // const [data, setData] = useState([]);
  // const text = props;
  // const result = ConvertListData.filter((rs) => {
  //   let search = rs.type.toLowerCase();
  //   return search.indexOf(text) !== -1;
  // });
  // setData(result);
  return (
    <div className="convertgraph-control">
      <div className="bg-group-convert-control">
        <div className="bg-convert-left-control">
          <div className="convert-left-control">
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
