import { useState } from "react";
const MassContent = () => {
  const [visible1, setVisibe1] = useState(false);
  const [visible2, setVisibe2] = useState(false);
  const [visible3, setVisibe3] = useState(false);
  const [visible4, setVisibe4] = useState(false);

  const handleReadmore = (option) => {
    switch (option) {
      case 1:
        setVisibe1(!visible1);
        break;
      case 2:
        setVisibe2(!visible2);
        break;
      case 3:
        setVisibe3(!visible3);
        break;
      case 4:
        setVisibe4(!visible4);
        break;
    }
  };
  return (
    <>
      <ul className="ul-convert-content">
        <li className="li-convert-content">
          <h4>Ounces:</h4>
        </li>

        <p className="span-convert-content">
          The ounce is any of several different units of mass, weight, or volume
          and is derived almost unchanged from the uncia, an Ancient Roman unit
          of measurement. <br />
          {visible1 || (
            <span
              onClick={() => handleReadmore(1)}
              className="convert-content-readmore"
            >
              Read more .....
            </span>
          )}
        </p>
        <p></p>
        {visible1 && (
          <>
            <p className="span-convert-content">
              The avoirdupois ounce {"("}exactly 28.349523125 g{")"} is 1⁄16
              avoirdupois pound; this is the United States customary and British
              imperial ounce. It is primarily used in the United States to
              measure packaged foods and food portions, postal items, areal
              density of fabric and paper, boxing gloves, and so on, but it is
              sometimes also used elsewhere in the Anglosphere.
            </p>
            <p className="span-convert-content">
              Although the avoirdupois ounce is the mass measure used for most
              purposes, the 'troy ounce' of exactly 31.1034768 g is used instead
              for the mass of precious metals such as gold, silver, platinum,
              palladium, rhodium, etc.
            </p>
          </>
        )}

        <li className="li-convert-content">
          <h4>Grams:</h4>
        </li>
        <p className="span-convert-content">
          The gram {"("}originally gramme; SI unit symbol g{")"} is a unit of
          mass in the International System of Units {"("}SI{")"} equal to one
          thousandth of a kilogram.
          <br />
          {visible2 || (
            <span
              onClick={() => handleReadmore(2)}
              className="convert-content-readmore"
            >
              Read more .....
            </span>
          )}
        </p>
        {visible2 && (
          <>
            <p className="span-convert-content">
              Originally defined as of 1795 as "the absolute weight of a volume
              of pure water equal to the cube of the hundredth part of a metre{" "}
              {"["}1 cm<sup>3</sup>
              {"]"}, and at the temperature of melting ice", the defining
              temperature {"("}≈0 °C{")"} was later changed to 4 °C, the
              temperature of maximum density of water.
            </p>
            <p className="span-convert-content">
              However, by the late 19th century, there was an effort to make the
              base unit the kilogram and the gram a derived unit. In 1960, the
              new International System of Units defined a gram as one
              one-thousandth of a kilogram {"("}i.e., one gram is 1×10−3 kg{")"}
              . The kilogram, as of 2019, is defined by the International Bureau
              of Weights and Measures from the fixed numerical value of the
              Planck constant {"("}h{")"}
            </p>
          </>
        )}

        <li className="li-convert-content">
          <h4>Pounds:</h4>
        </li>
        <p className="span-convert-content">
          The pound or pound-mass is a unit of mass used in both the British
          imperial and United States customary systems of measurement. Various
          definitions have been used; the most common today is the international
          avoirdupois pound, which is legally defined as exactly 0.45359237
          kilograms, and which is divided into 16 avoirdupois ounces. The
          international standard symbol for the avoirdupois pound is lb; an
          alternative symbol is lb<sub>m </sub>
          {"("}for most pound definitions{")"}, # {"("}chiefly in the U.S.{")"}
          ,and ℔ or ″̶ {"("}specifically for the apothecaries' pound{")"}.<br />
          {visible3 || (
            <span
              onClick={() => handleReadmore(3)}
              className="convert-content-readmore"
            >
              Read more .....
            </span>
          )}
        </p>
        {visible3 && (
          <>
            <p className="span-convert-content">
              The unit is descended from the Roman libra {"("}hence the
              abbreviation "lb"{")"}. The English word pound is cognate with,
              among others, German Pfund, Dutch pond, and Swedish pund. These
              units are now designated as historical and are no longer in common
              usage, being replaced by the metric system.
            </p>
            <p className="span-convert-content">
              Usage of the unqualified term pound reflects the historical
              conflation of mass and weight. This accounts for the modern
              distinguishing terms pound-mass and pound-force.
            </p>
          </>
        )}

        <li className="li-convert-content">
          <h4>Kilograms:</h4>
        </li>
        <p className="span-convert-content">
          The kilogram {"("}also kilogramme{")"} is the base unit of mass in the
          International System of Units {"("}SI{")"}, having the unit symbol kg.
          It is a widely used measure in science, engineering and commerce
          worldwide, and is often simply called a kilo colloquially. It means
          'one thousand grams'.
          <br />
          {visible4 || (
            <span
              onClick={() => handleReadmore(4)}
              className="convert-content-readmore"
            >
              Read more .....
            </span>
          )}
        </p>
        {visible4 && (
          <>
            <p className="span-convert-content">
              The kilogram is defined in terms of the Planck constant, the
              second, and the metre, both of which are based on fundamental
              physical constants. This allows a properly equipped metrology
              laboratory to calibrate a mass measurement instrument such as a
              Kibble balance as the primary standard to determine an exact
              kilogram mass
            </p>
            <p className="span-convert-content">
              The kilogram was originally defined in 1795 during the French
              Revolution as the mass of one litre of water. The current
              definition of a kilogram agrees with this original definition to
              within 30 parts per million. In 1799, the platinum Kilogramme des
              Archives replaced it as the standard of mass. In 1889, a cylinder
              of platinum-iridium, the International Prototype of the Kilogram{" "}
              {"("}IPK{")"}, became the standard of the unit of mass for the
              metric system and remained so for 130 years, before the current
              standard was adopted in 2019.
            </p>
          </>
        )}

        <li className="li-convert-content">
          <h4>Short Tons:</h4>
        </li>
        <p className="span-convert-content">
          The short ton {"("}abbreviation tn{")"} is a measurement unit equal to
          2,000 pounds {"("}907.18 kg{")"}. It is commonly used in the United
          States, where it is known simply as a ton, although the term is
          ambiguous, the single word being variously used for short, long, and
          metric ton.
        </p>
        <p className="span-convert-content">
          The various tons are defined as units of mass. They are sometimes used
          as units of weight, the force exerted by a mass at standard gravity{" "}
          {"("}e.g., short ton-force{")"}. One short ton exerts a weight at one
          standard gravity of 2,000 pound-force {"("}lbf{")"}.
        </p>

        <li className="li-convert-content">
          <h4>
            Mega Grams {"("}Metric Ton{")"}:
          </h4>
        </li>
        <p className="span-convert-content">
          A metric ton is a unit of measurement for mass. It is equal to 1000
          kilograms, or one megagram {"("}one million grams{")"}. When people
          talk about a ton, in countries which use the SI system of units, they
          mean the metric ton. The metric ton is usually abbreviated to t.
        </p>
      </ul>
    </>
  );
};

export default MassContent;
