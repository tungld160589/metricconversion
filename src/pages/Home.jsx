import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TypeofConvers from "../components/TypeofConvers";
import Faqs from "../components/Faqs";
import Logo from "../img/Logo.png";
import FAQsList from "../Data/FAQsList.json";
import { useState } from "react";

const Home = () => {
  const [state, setState] = useState(FAQsList);
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
              <Faqs rs={rs} index={index} />
            ))}
          </div>
        </div>
      </article>
      <footer>
        <Footer Logo={Logo} />
      </footer>
    </div>
  );
};

export default Home;
