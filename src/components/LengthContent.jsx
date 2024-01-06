import { useState } from "react";
const LengthContent = () => {
  const [visible1, setVisibe1] = useState(false);
  const [visible2, setVisibe2] = useState(false);
  const [visible3, setVisibe3] = useState(false);
  const [visible4, setVisibe4] = useState(false);
  const [visible5, setVisibe5] = useState(false);

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
      case 5:
        setVisibe5(!visible5);
        break;
    }
  };

  return (
    <>
      <ul className="ul-convert-content" id="ul-convert-content">
        <li className="li-convert-content">
          <h4>Inchs:</h4>
        </li>
        <p className="span-convert-content">
          The inch {"("}symbol: in or ″{")"} is a unit of length in the British
          imperial and the United States customary systems of measurement. It is
          equal to 1 / 36 yard or 1 / 12 of a foot. Derived from the Roman uncia
          {"("}"twelfth"{")"}, the word inch is also sometimes used to translate
          similar units in other measurement systems, usually understood as
          deriving from the width of the human thumb.
          <br />
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
          <p className="span-convert-content">
            Standards for the exact length of an inch have varied in the past,
            but since the adoption of the international yard during the 1950s
            and 1960s the inch has been based on the metric system and defined
            as exactly 25.4 mm.
          </p>
        )}

        <li className="li-convert-content">
          <h4>Milimeters:</h4>
        </li>
        <p className="span-convert-content">
          The millimetre {"("}international spelling; SI unit symbol mm{")"} or
          millimeter {"("}American spelling{")"} is a unit of length in the
          International System of Units {"("}SI{")"}, equal to one thousandth of
          a metre, which is the SI base unit of length. Therefore, there are one
          thousand millimetres in a metre. There are ten millimetres in a
          centimetre.
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
          <p className="span-convert-content">
            One millimetre is equal to 1000 micrometres or 1000000 nanometres.
            Since an inch is officially defined as exactly 25.4 millimetres, a
            millimetre is equal to exactly 5⁄127 {"("}≈ 0.03937{")"} of an inch.
          </p>
        )}

        <li className="li-convert-content">
          <h4>Feets:</h4>
        </li>
        <p className="span-convert-content">
          The feet {"("}pl. foot{")"}, standard symbol: ft, is a unit of length
          in the British imperial and United States customary systems of
          measurement. The prime symbol, ′, is commonly used to represent the
          foot. In both customary and imperial units, one foot comprises 12
          inches, and one yard comprises three feet. Since an international
          agreement in 1959, the foot is defined as equal to exactly 0.3048
          meters.
          <br />
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
            {" "}
            <p className="span-convert-content">
              Historically, the "foot" was a part of many local systems of
              units, including the Greek, Roman, Chinese, French, and English
              systems. It varied in length from country to country, from city to
              city, and sometimes from trade to trade. Its length was usually
              between 250 mm and 335 mm and was generally, but not always,
              subdivided into 12 inches or 16 digits.
            </p>
            <p className="span-convert-content">
              The United States is the only industrialized country that uses the
              {"("}international{")"} foot in preference to the meter in its
              commercial, engineering, and standards activities. The foot is
              legally recognized in the United Kingdom; road distance signs must
              use imperial units {"("}however, distances on road signs are
              always marked in miles or yards, not feet; bridge clearances are
              given in meters as well as feet and inches{")"}, while its usage
              is widespread among the British public as a measurement of height.
              The foot is recognized as an alternative expression of length in
              Canada. Both the UK and Canada have partially metricated their
              units of measurement. The measurement of altitude in international
              aviation
              {"("}the flight level unit{")"} is one of the few areas where the
              foot is used outside the English-speaking world.
            </p>
            <p className="span-convert-content">
              The length of the {"("}international{")"} foot corresponds to a
              human foot with shoe size of 13 {"("}UK{")"}, 14 {"("}US male{")"}
              , 15.5 {"("}US female{")"} or 48 {"("}EU sizing{")"}.
            </p>
          </>
        )}

        <li className="li-convert-content">
          <h4>Meters:</h4>
        </li>
        <p className="span-convert-content">
          The meter {"("}or metre in American spelling; symbol: m{")"} is the
          base unit of length in the International System of Units {"("}SI{")"}.
          Since 2019 the metre has been defined as the length of the path
          travelled by light in vacuum during a time interval of 1 / 299792458
          of a second, where the second is defined by a hyperfine transition
          frequency of caesium
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
              The metre was originally defined in 1791 by the French National
              Assembly as one ten-millionth of the distance from the equator to
              the North Pole along a great circle, so the Earth's polar
              circumference is approximately 40000 km.
            </p>
            <p className="span-convert-content">
              In 1799, the metre was redefined in terms of a prototype metre
              bar, the bar used was changed in 1889, and in 1960 the metre was
              redefined in terms of a certain number of wavelengths of a certain
              emission line of krypton-86. The current definition was adopted in
              1983 and modified slightly in 2002 to clarify that the metre is a
              measure of proper length. From 1983 until 2019, the metre was
              formally defined as the length of the path travelled by light in
              vacuum in 1 / 299792458 of a second. After the 2019 redefinition
              of the SI base units, this definition was rephrased to include the
              definition of a second in terms of the caesium frequency ΔνCs.
              This series of amendments did not alter the size of the metre
              significantly – today Earth's polar circumference measures
              40007.863 km, a change of 0.022% from the original value of
              exactly 40000 km, which also includes improvements in the accuracy
              of measuring the circumference.
            </p>
          </>
        )}

        <li className="li-convert-content">
          <h4>Yards:</h4>
        </li>
        <p className="span-convert-content">
          The yard {"("}symbol: yd{")"} is an English unit of length in both the
          British imperial and US customary systems of measurement equalling 3
          feet or 36 inches. Since 1959 it has been by international agreement
          standardized as exactly 0.9144 meter. A distance of 1,760 yards is
          equal to 1 mile.
        </p>

        <p className="span-convert-content">
          The US survey yard is very slightly longer.
        </p>

        <li className="li-convert-content">
          <h4>Miles:</h4>
        </li>

        <p className="span-convert-content">
          The mile, sometimes the international mile or statute mile to
          distinguish it from other miles, is a British imperial unit and United
          States customary unit of distance; both are based on the older English
          unit of length equal to 5,280 English feet, or 1,760 yards. The
          statute mile was standardised between the Commonwealth of Nations and
          the United States by an international agreement in 1959, when it was
          formally redefined with respect to SI units as exactly 1,609.344
          metres.
          <br />
          {visible5 || (
            <span
              onClick={() => handleReadmore(5)}
              className="convert-content-readmore"
            >
              Read more .....
            </span>
          )}
        </p>
        {visible5 && (
          <p className="span-convert-content">
            With qualifiers, mile is also used to describe or translate a wide
            range of units derived from or roughly equivalent to the Roman mile
            {"("}roughly 1.48 km{")"}, such as the nautical mile {"("}now 1.852
            km exactly{")"}, the Italian mile {"("}roughly 1.852 km{")"}, and
            the Chinese mile {"("}now 500 m exactly{")"}. The Romans divided
            their mile into 5,000 pedēs {"("}"feet"{")"}, but the greater
            importance of furlongs in the Elizabethan-era England meant that the
            statute mile was made equivalent to 8 furlongs or 5,280 feet in
            1593. This form of the mile then spread across the British Empire,
            some successor states of which continue to employ the mile. The US
            Geological Survey now employs the metre for official purposes, but
            legacy data from its 1927 geodetic datum has meant that a separate
            US survey mile {"("} 6336 / 3937 km{")"}
            continues to see some use, although it was officially phased out in
            2022. While most countries replaced the mile with the kilometre when
            switching to the International System of Units {"("}SI
            {")"}, the international mile continues to be used in some
            countries, such as Liberia, the United Kingdom, the United States,
            and a number of countries with fewer than one million inhabitants,
            most of which are UK or US territories or have close historical ties
            with the UK or US.
          </p>
        )}

        <li className="li-convert-content">
          <h4>Kilometers:</h4>
        </li>
        <p className="span-convert-content">
          The kilometre {"("}SI symbol: km; /ˈkɪləmiːtər/ or /kɪˈlɒmətər/{")"},
          spelt kilometer in American English and Philippine English, is a unit
          of length in the International System of Units {"("}SI{")"}, equal to
          one thousand metres {"("}kilo- being the SI prefix for 1000{")"}. It
          is now the measurement unit used for expressing distances between
          geographical places on land in most of the world; notable exceptions
          are the United States and the United Kingdom where the statute mile is
          the main unit used.
        </p>
        <p className="span-convert-content">
          The abbreviations k or K {"("}pronounced /keɪ/{")"} are commonly used
          to represent kilometre, but are not recommended by the BIPM. A slang
          term for the kilometre in the US, UK, and Canadian militaries is klick
        </p>
      </ul>
    </>
  );
};

export default LengthContent;
