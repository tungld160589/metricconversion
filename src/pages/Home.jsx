import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TypeofConvers from "../components/TypeofConvers";
import Faqs from "../components/Faqs";
import Logo from "../img/Logo.png";
import ClickToTop from "../components/ClickToTop";
import Answer01 from "../components/Answer01";
import Answer02 from "../components/Answer02";
import Answer03 from "../components/Answer03";
import Answer04 from "../components/Answer04";
import Answer05 from "../components/Answer05";
import Answer06 from "../components/Answer06";
import { useEffect, useState } from "react";

export const FAQsDataList = [
  {
    id: 1,
    question: "How do I enter numbers in Scientific Notation ?",
    sortanswer:
      "Scientific notation is a way of expressing numbers that are very large or very small in a concise and standardized form. It is written in the form: a x 10^n where a is a number greater than or equal to 1 and less than 10, and n is an integer. Here's how you can enter numbers in scientific notation",
    fullanswer: Answer01,
  },
  {
    id: 2,
    question: "What is a knot ?",
    sortanswer:
      "A knot is a unit of speed used in navigation and aviation. It is defined as one nautical mile per hour (nautical mile/h) and is commonly abbreviated as kn. The term knot is derived from the practice of using knots tied along a line (usually a log line) to measure the speed of a ship at sea.",
    fullanswer: Answer02,
  },
  {
    id: 3,
    question: "What is a nautical mile ?",
    sortanswer:
      "A nautical mile is a unit of measurement used in navigation and maritime contexts. It is commonly used for measuring distances at sea or in the air. The nautical mile is based on the circumference of the Earth and is defined as one minute of latitude along any meridian.",
    fullanswer: Answer03,
  },
  {
    id: 4,
    question: "What about rainfall ?",
    sortanswer:
      "Rainfall is typically measured in units of depth, indicating the amount of rain that has fallen over a specific area. The common units for rainfall are inches and millimeters. The conversion between inches and millimeters for rainfall is the same as for general length",
    fullanswer: Answer04,
  },
  {
    id: 5,
    question:
      "How do i convert betrween inches of rain, and milimeter of rain ?",
    sortanswer:
      "To convert between inches of rain and millimeters of rain, you can use the following conversion factor: 1 inch = 25.4 millimeters .So, to convert inches of rain to millimeters, multiply the number of inches by 25.4. Conversely, to convert millimeters of rain to inches, divide the number of millimeters by 25.4.",
    fullanswer: Answer05,
  },
  {
    id: 6,
    question:
      "What is the difference between the long ton,short ton and metric ton ?",
    sortanswer:
      "The long ton, short ton, and metric ton are different units of mass or weight used in various parts of the world",
    fullanswer: Answer06,
  },
  {
    id: 7,
    question: "At what temperature are Celsius and Fahrenheit the same?",
    sortanswer:
      "The temperature at which Celsius and Fahrenheit are the same is -40 degrees. Therefore, -40 degrees Celsius is also -40 degrees Fahrenheit.",
    fullanswer: "",
  },
];

const Home = () => {
  const [y, setY] = useState();

  const getPosition = () => {
    const y = window.scrollY;
    setY(y);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", getPosition);
    return () => {
      window.removeEventListener("scroll", getPosition);
    };
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
          </div>
          {FAQsDataList.map((rs, index) => (
            <Faqs key={index} faqs={rs} index={index} y={y} />
          ))}
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
