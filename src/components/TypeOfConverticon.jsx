import { Link } from "react-router-dom";
const TypeOfConverticon = (props) => {
  const { rs } = props;
  return (
    <Link to={`/${rs.link}`}>
      <div className={`TypeOfConverticon ${rs.id}`}>
        <div>
          <img src={rs.image} />
        </div>
        <p>{rs.type}</p>
      </div>
    </Link>
  );
};

export default TypeOfConverticon;
