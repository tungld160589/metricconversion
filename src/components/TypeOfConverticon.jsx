import { Link } from "react-router-dom";
const TypeOfConverticon = (typeofData) => {
  const { typeOf } = typeofData;
  return (
    <Link to={`/${typeOf.link}`}>
      <div className={`TypeOfConverticon ${typeOf.id}`}>
        <div>
          <img src={typeOf.image} />
        </div>
        <p>{typeOf.type}</p>
      </div>
    </Link>
  );
};

export default TypeOfConverticon;
