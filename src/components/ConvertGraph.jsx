import ConvertChangeIMG from "../img/preview.png";
const ConvertGraph = () => {
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
