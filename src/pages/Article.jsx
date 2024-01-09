import Nav from "../components/Nav";
import Footer from "../components/Footer";
import US from "../img/US Metriction.png";
import meter from "../img/Meter.png";
import Metric from "../img/Metric.png";
import Si from "../img/SI.png";
import { useState, useEffect } from "react";
import ArticleThumb from "../components/ArticleThumb";
import ClickToTop from "../components/ClickToTop";
export const ArticlesThumbList = [
  {
    id: 1,
    img: US,
    title: "U.S Metrication",
    p1: "The United States, like many other countries, has a rich history of traditional units of measurement that were used for centuries before the adoption of the metric system. While the metric system is widely recognized and utilized in scientific and international contexts, traditional units of measurement still hold a place in American culture and everyday life. This article explores some of the traditional units that have played a significant role in the United States.",
    link: "Art_USMetriction",
  },
  {
    id: 2,
    img: meter,
    title: "The Meter",
    p1: "The meter, a fundamental unit of length in the metric system, has undergone a historical evolution in its definition, reflecting efforts to establish a universally consistent and precise standard.",
    link: "Art_Meter",
  },
  {
    id: 3,
    img: Metric,
    title: "The Metric System",
    p1: "The metric system, a globally recognized standard for measurement, provides a uniform language for expressing quantities in various fields. While the International System of Units (SI) is the modern and widely accepted metric system, there have been historical variations and local adaptations. This article explores the differences between various metric systems and highlights the evolution towards the universally accepted SI system.",
    link: "Art_Metric",
  },
  {
    id: 4,
    img: Si,
    title: "The SI System",
    p1: "The International System of Units (SI) is the modern form of the metric system and is the world's most widely used system of measurement. It is used in both everyday life and in scientific research and industry. The SI system provides a consistent and standardized set of units for expressing physical quantities. Here are some key features of the SI system",
    link: "Art_SI",
  },
];

const Article = () => {
  const [state, setState] = useState(ArticlesThumbList);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="click-to-top-control">
        <ClickToTop />
      </div>
    </>
  );
};

export default Article;
