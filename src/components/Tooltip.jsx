const Tooltip = (props) => {
  const { text, textarea } = props;
  return (
    <div className="bottom" style={textarea ? { top: 55 } : { top: 35 }}>
      <div className="bottom-tooltip-group">
        <p className="tooltip-alert">&#x26A0;</p>
        <p>{text}</p>
      </div>
      <i></i>
    </div>
  );
};

export default Tooltip;
