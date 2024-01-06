import { useState } from "react";
const TemperatureContent = () => {
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
          <h4>Fahrenheits:</h4>
        </li>
        <p className="span-convert-content">
          The Fahrenheit scale {"("}/ˈfærənˌhaɪt, ˈfɑːr-/{")"}is a temperature
          scale based on one proposed in 1724 by the European physicist Daniel
          Gabriel Fahrenheit {"("}1686–1736{")"}. It uses the degree Fahrenheit{" "}
          {"("}symbol: °F{")"} as the unit. Several accounts of how he
          originally defined his scale exist, but the original paper suggests
          the lower defining point, 0 °F, was established as the freezing
          temperature of a solution of brine made from a mixture of water, ice,
          and ammonium chloride {"("}a salt{")"}. The other limit established
          was his best estimate of the average human body temperature,
          originally set at 90 °F, then 96 °F {"("}about 2.6 °F less than the
          modern value due to a later redefinition of the scale{")"}.<br />
          {visible1 || (
            <span
              onClick={() => handleReadmore(1)}
              className="convert-content-readmore"
            >
              Read more .....
            </span>
          )}
        </p>
        {visible1 && (
          <>
            {" "}
            <p className="span-convert-content">
              For much of the 20th century, the Fahrenheit scale was defined by
              two fixed points with a 180 °F separation: the temperature at
              which pure water freezes was defined as 32 °F and the boiling
              point of water was defined to be 212 °F, both at sea level and
              under standard atmospheric pressure. It is now formally defined
              using the Kelvin scale and hence ultimately by the Boltzmann
              constant, the Planck constant, and the second {"("}defined as a
              specific number of cycles of the unperturbed ground-state
              hyperfine transition frequency of the caesium-133 atom.
              {")"}
            </p>
            <p className="span-convert-content">
              It continues to be officially used in the United States {"("}
              including its unincorporated territories{")"}, its freely
              associated states in the Western Pacific {"("}Palau, the Federated
              States of Micronesia and the Marshall Islands{")"}, the Cayman
              Islands, and the former American colony of Liberia.
            </p>
            <p className="span-convert-content">
              Though the United Kingdom changed from Fahrenheit to Celsius in
              metrology, Fahrenheit is sometimes still used in newspaper
              headlines to sensationalise heatwaves.
            </p>
          </>
        )}

        <li className="li-convert-content">
          <h4>Celsius:</h4>
        </li>
        <p className="span-convert-content">
          The degree Celsius is the unit of temperature on the Celsius scale
          {"("}originally known as the centigrade scale outside Sweden{")"}, one
          of two temperature scales used in the International System of Units{" "}
          {"("}SI{")"}, the other being the Kelvin scale. The degree Celsius{" "}
          {"("}symbol: °C{")"}can refer to a specific temperature on the Celsius
          scale or a unit to indicate a difference or range between two
          temperatures. It is named after the Swedish astronomer Anders Celsius{" "}
          {"("}1701–1744{")"}, who developed a variant of it in 1742. The unit
          was called centigrade in several languages {"("}from the Latin centum,
          which means 100, and gradus, which means steps{")"} for many years. In
          1948, the International Committee for Weights and Measures renamed it
          to honor Celsius and also to remove confusion with the term for one
          hundredth of a gradian in some languages. Most countries use this
          scale; the other major scale, Fahrenheit, is still used in the United
          States, some island territories, and Liberia. The Kelvin scale is of
          use in the sciences, with 0 K {"("}−273.15 °C{")"}representing
          absolute zero.
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
            {" "}
            <p className="span-convert-content">
              Since 1743, the Celsius scale has been based on 0 °C for the
              freezing point of water and 100 °C for the boiling point of water
              at 1 atm pressure. Prior to 1743 the values were reversed {"("}
              i.e. the boiling point was 0 degrees and the freezing point was
              100 degrees{")"}. The 1743 scale reversal was proposed by
              Jean-Pierre Christin.
            </p>
            <p className="span-convert-content">
              By international agreement, between 1954 and 2019 the unit degree
              Celsius and the Celsius scale were defined by absolute zero and
              the triple point of water. After 2007, it was clarified that this
              definition referred to Vienna Standard Mean Ocean Water {"("}VSMOW
              {")"}, a precisely defined water standard. This definition also
              precisely related the Celsius scale to the scale of the kelvin,
              the SI base unit of thermodynamic temperature with symbol K.
              Absolute zero, the lowest temperature, is defined as being exactly
              0 K and −273.15 °C. Until 19 May 2019, the temperature of the
              triple point of water was defined as exactly 273.16 K {"("}0.01 °C
              {")"}.
            </p>
            <p className="span-convert-content">
              On 20 May 2019, the kelvin was redefined so that its value is now
              determined by the definition of the Boltzmann constant rather than
              being defined by the triple point of VSMOW. This means that the
              triple point is now a measured value, not a defined value. The
              newly defined exact value of the Boltzmann constant was selected
              so that the measured value of the VSMOW triple point is exactly
              the same as the older defined value to within the limits of
              accuracy of contemporary metrology. The temperature in degree
              Celsius is now defined as the temperature in kelvins subtracted by
              273.15, meaning that a temperature difference of one degree
              Celsius and that of one kelvin are exactly the same, and that the
              degree Celsius remains exactly equal to the kelvin {"("}i.e., 0 °C
              remains exactly 273.15 K{")"}.
            </p>
          </>
        )}

        <li className="li-convert-content">
          <h4>Kelvin:</h4>
        </li>
        <p className="span-convert-content">
          The kelvin, symbol K, is a unit of measurement for temperature. The
          Kelvin scale is an absolute scale, which is defined such that 0 K is
          absolute zero and a change of thermodynamic temperature T by 1 kelvin
          corresponds to a change of thermal energy kT by 1.380649×10−23 J. The
          Boltzmann constant k = 1.380649×10−23 J⋅K−1 was exactly defined in the
          2019 redefinition of the SI base units such that the triple point of
          water is 273.16±0.0001 K. The kelvin is the base unit of temperature
          in the International System of Units {"("}SI{")"}, used alongside its
          prefixed forms.It is named after the Belfast-born and University of
          Glasgow-based engineer and physicist William Thomson, 1st Baron Kelvin
          {"("}1824–1907{")"}.<br />
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
              Historically, the Kelvin scale was developed from the Celsius
              scale, such that 273.15 K was 0 °C {"("}the approximate melting
              point of ice
              {")"} and a change of one kelvin was exactly equal to a change of
              one degree Celsius. This relationship remains accurate, but the
              Celsius, Fahrenheit, and Rankine scales are now defined in terms
              of the Kelvin scale. The kelvin is the primary unit of temperature
              for engineering and the physical sciences, while in most countries
              the Celsius scale remains the dominant scale outside of these
              fields. In the United States, outside of the physical sciences,
              the Fahrenheit scale predominates, with the kelvin or Rankine
              scale employed for absolute temperature.
            </p>
          </>
        )}
      </ul>
    </>
  );
};

export default TemperatureContent;
