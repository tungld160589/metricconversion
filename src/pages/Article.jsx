import Nav from "../components/Nav";
import Footer from "../components/Footer";
import US from "../img/US Metriction.png";
import meter from "../img/Meter.png";
import Metric from "../img/Metric.png";
import Si from "../img/SI.png";
import { useState } from "react";
import ArticleThumb from "../components/ArticleThumb";
export const ArticlesThumbList = [
  {
    id: 1,
    img: US,
    title: "U.S Metrication",
    p1: "The United States, like many other countries, has a rich history of traditional units of measurement that were used for centuries before the adoption of the metric system.",
    link: "Art_USMetriction",
  },
  {
    id: 2,
    img: meter,
    title: "The Meter",
    p1: "The United States, like many other countries, has a rich history of traditional units of measurement that were used for centuries before the adoption of the metric system.",
    link: "Art_Meter",
  },
  {
    id: 3,
    img: Metric,
    title: "The Metric System",
    p1: "The United States, like many other countries, has a rich history of traditional units of measurement that were used for centuries before the adoption of the metric system.",
    link: "Art_Metric",
  },
  {
    id: 4,
    img: Si,
    title: "The SI System",
    p1: "The United States, like many other countries, has a rich history of traditional units of measurement that were used for centuries before the adoption of the metric system.",
    link: "Art_SI",
  },
];

const Article = () => {
  const [state, setState] = useState(ArticlesThumbList);
  const searchHandler = (e) => {
    let txt = e.target.value.toLowerCase();
    let result = ArticlesThumbList.filter((rs) => {
      let search = rs.title.toLowerCase();
      return search.indexOf(txt) !== -1;
    });
    setState(result);
  };
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="Art">
        <p>Article</p>
        <input
          size={45}
          placeholder="Enter Article name..."
          onChange={searchHandler}
        />
      </div>
      <div className="article-thumb-group-control">
        {state.map((list) => (
          <div key={list.id}>
            <ArticleThumb list={list} />
          </div>
        ))}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Article;
