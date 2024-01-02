import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TypeofConvers from "../components/TypeofConvers";
import Faqs from "../components/Faqs";
import Logo from "../img/Logo.png";
import FAQsList from "../Data/FAQsList.json";
import ClickToTop from "../components/ClickToTop";
import { useState, useEffect } from "react";

const Home = () => {
  const [state, setState] = useState(FAQsList);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <nav>
        <Nav Logo={Logo} />
      </nav>
      <header>
        <Header />
      </header>
      <article>
        <TypeofConvers Logo={Logo} />
        <div className="Faqs-control">
          <div className="txthead-faqs">
            <p>Frequently Asked Questions</p>
            {state.map((rs, index) => (
              <Faqs key={index} faqs={rs} index={index} />
            ))}
          </div>
        </div>
      </article>
      <footer>
        <Footer Logo={Logo} />
      </footer>
      <div className="click-to-top-control">
        <ClickToTop />
      </div>
    </div>
  );
};

export default Home;
