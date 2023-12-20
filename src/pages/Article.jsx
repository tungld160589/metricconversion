import Nav from "../components/Nav";
import Footer from "../components/Footer";
import US from "../img/US Metriction.png"
import meter from "../img/Meter.png";
import Metric from "../img/Metric.png";
import Si from "../img/SI.png"
import { Link } from "react-router-dom";


const Article = () => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="Art">
        <p>Article</p>
        <input className="Art-Search" type="text" placeholder="Enter Article"/>
      </div>
      <div className="Art1">
     
        <div><img src= {US} alt="US" /></div>
        <div className="Art2">
          <Link to={"/Art_USMetriction"}>
            <li className="v1">U.S Metrication</li>
          </Link>
          
          <p>The United States, like many other countries, has a rich history of traditional
            units of measurement that were used for centuries before the adoption of the metric system.</p>
            <div className="btnreadmore"><button>Read More</button></div>
        </div>
      </div>
      <div className="Art1">
     
     <div><img src={meter} alt="Meter" /></div>
     <div className="Art2">
       <p className="v1">The Meter</p>
       <p>The United States, like many other countries, has a rich history of traditional
         units of measurement that were used for centuries before the adoption of the metric system.</p>
         <div className="btnreadmore"><button>Read More</button></div>
     </div>
   </div>
   <div className="Art1">
     
     <div><img src={Metric} alt="The Metric" /></div>
     <div className="Art2">
       <p className="v1">The Metric System</p>
       <p>The United States, like many other countries, has a rich history of traditional
         units of measurement that were used for centuries before the adoption of the metric system.</p>
         <div className="btnreadmore"><button>Read More</button></div>
     </div>
   </div>
   <div className="Art1">
     
     <div><img src={Si} alt="SI Units" /></div>
     <div className="Art2">
       <p className="v1">The SI System</p>
       <p>The United States, like many other countries, has a rich history of traditional
         units of measurement that were used for centuries before the adoption of the metric system.</p>
         <div className="btnreadmore"><button>Read More</button></div>
     </div>
   </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Article;
