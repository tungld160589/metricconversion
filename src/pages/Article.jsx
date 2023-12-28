import Nav from "../components/Nav";
import Footer from "../components/Footer";
import US from "../img/US Metriction.png";
import meter from "../img/Meter.png";
import Metric from "../img/Metric.png";
import Si from "../img/SI.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import resultSet from "../Data/Article.json"

const Article = () => {
  const [searchTerm, setSerchTerm]= useState("")
  const [state, setState]= useState(resultSet);
  const searchHandler = (e)=> {
    const act= e.target.value;
    setSerchTerm(act);
    let text = act.toLowerCase();
    let result = resultSet.filter((rs) =>{
      let search = rs.title.toLowerCase ();
      return search.indexOf(text) !== -1;
    })
    setState(result)
  }
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="Art">
        <p>Article</p>
        <input size={45}
          value={searchTerm}
          placeholder="Enter Article name..."
          onChange={searchHandler}
        />
        {searchTerm && (
          <div className="resultSearch">
            {state.map((rs) => (
              <Link to={`/${rs.type}`}>
                <div>{rs.title}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="Art1">
        <div>
          <img src={US} alt="US" />
        </div>
        <div className="Art2">
          <Link to={"/Art_USMetriction"}>
            <li className="v1">U.S Metrication</li>
          </Link>

          <p>
            The United States, like many other countries, has a rich history of
            traditional units of measurement that were used for centuries before
            the adoption of the metric system.
          </p>
          <div className="btnreadmore">
            <Link to={"/Art_USMetriction"}>
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Art1">
        <div>
          <img src={meter} alt="Meter" />
        </div>
        <div className="Art2">
          <Link to={"/Art_Meter"}>
            <p className="v1">The Meter</p>
          </Link>

          <p>
            The United States, like many other countries, has a rich history of
            traditional units of measurement that were used for centuries before
            the adoption of the metric system.
          </p>
          <div className="btnreadmore">
            <Link to={"/Art_Meter"}>
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Art1">
        <div>
          <img src={Metric} alt="The Metric" />
        </div>
        <div className="Art2">
          <Link to={"/Art_Metric"}>
            <p className="v1">The Metric System</p>
          </Link>
          <p>
            The United States, like many other countries, has a rich history of
            traditional units of measurement that were used for centuries before
            the adoption of the metric system.
          </p>
          <div className="btnreadmore">
            <Link to={"/Art_Metric"}>
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Art1">
        <div>
          <img src={Si} alt="SI Units" />
        </div>
        <div className="Art2">
          <Link to={"/Art_SI"}>
            <p className="v1">The SI System</p>
          </Link>
          <p>
            The United States, like many other countries, has a rich history of
            traditional units of measurement that were used for centuries before
            the adoption of the metric system.
          </p>
          <div className="btnreadmore">
            <Link to={"/Art_SI"}>
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Article;
