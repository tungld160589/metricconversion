import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TypeofConvers from "../components/TypeofConvers";
import Faqs from "../components/Faqs";
import Logo from "../img/Logo.png";

const Home = () => {
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
        <Faqs />
      </article>
      <footer>
        <Footer Logo={Logo} />
      </footer>
    </div>
  );
};

export default Home;
