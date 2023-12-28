import { Link } from "react-router-dom";
const ArticleThumb = (props) => {
  const { list } = props;
  return (
    <div className="article-thumb-control">
      <div className="article-thumb-img-control">
        <img src={`${list.img}`} alt="thumb img" />
      </div>
      <div className="article-thumb-txt-control">
        <Link to={`/${list.link}`}>
          <p className="article-thumb-title">{list.title}</p>
        </Link>
        <p className="article-thum-text">{list.p1}</p>
        <div className="readmore-btn">
          <Link to={`/${list.link}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleThumb;
