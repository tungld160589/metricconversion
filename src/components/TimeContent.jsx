import { useState } from "react";
const TimeContent = () => {
  const [visible1, setVisibe1] = useState(false);
  const [visible2, setVisibe2] = useState(false);
  const [visible3, setVisibe3] = useState(false);
  const [visible4, setVisibe4] = useState(false);
  const [visible5, setVisibe5] = useState(false);
  const [visible6, setVisibe6] = useState(false);

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
      case 5:
        setVisibe6(!visible6);
        break;
    }
  };
  return (
    <>
      <ul className="ul-convert-content">
        <li className="li-convert-content">
          <h4>Second:</h4>
        </li>
        <p className="span-convert-content">
          The second {"("}symbol: s{")"} is the unit of time in the
          International System of Units {"("}SI{")"}, historically defined as
          1⁄86400 of a day – this factor derived from the division of the day
          first into 24 hours, then to 60 minutes and finally to 60 seconds each{" "}
          {"("}24 × 60 × 60 = 86400{")"}.<br />
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
            This current definition was adopted in 1967 when it became feasible
            to define the second based on fundamental properties of nature with
            caesium clocks. Because the speed of Earth's rotation varies and is
            slowing ever so slightly, a leap second is added at irregular
            intervals to civil time to keep clocks in sync with Earth's
            rotation.
          </p>
        )}

        <li className="li-convert-content">
          <h4>Hour:</h4>
        </li>
        <p className="span-convert-content">
          An hour {"("}symbol: h; also abbreviated hr{")"} is a unit of time
          historically reckoned as 1⁄24 of a day and defined contemporarily as
          exactly 3,600 seconds {"("}SI{")"}. There are 60 minutes in an hour,
          and 24 hours in a day.
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
              The hour was initially established in the ancient Near East as a
              variable measure of 1⁄12 of the night or daytime. Such seasonal
              hours, also known as temporal hours or unequal hours, varied by
              season and latitude.
            </p>
            <p className="span-convert-content">
              Equal hours or equinoctial hours were taken as 1⁄24 of the day as
              measured from noon to noon; the minor seasonal variations of this
              unit were eventually smoothed by making it 1⁄24 of the mean solar
              day. Since this unit was not constant due to long term variations
              in the Earth's rotation, the hour was finally separated from the
              Earth's rotation and defined in terms of the atomic or physical
              second.
            </p>
            <p className="span-convert-content">
              In the modern metric system, hours are an accepted unit of time
              defined as 3,600 atomic seconds. However, on rare occasions an
              hour may incorporate a positive or negative leap second,
              effectively making it appear to last 3,599 or 3,601 seconds, in
              order to keep UTC within 0.9 seconds of UT1, the latter of which
              is based on measurements of the mean solar day.
            </p>
          </>
        )}

        <li className="li-convert-content">
          <h4>Day:</h4>
        </li>
        <p className="span-convert-content">
          A day is the time period of a full rotation of the Earth with respect
          to the Sun. On average, this is 24 hours {"("}86,400 seconds{")"}. As
          a day passes at a given location it experiences morning, noon,
          afternoon, evening, and night. This daily cycle drives circadian
          rhythms in many organisms, which are vital to many life processes.
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
            <p className="span-convert-content">
              A collection of sequential days is organized into calendars as
              dates, almost always into weeks, months and years. A solar
              calendar organizes dates based on the Sun's annual cycle, giving
              consistent start dates for the four seasons from year to year. A
              lunar calendar organizes dates based on the Moon's lunar phase.
            </p>
            <p className="span-convert-content">
              In common usage, a day starts at midnight, written as 00:00 or
              12:00 am in 24- or 12-hour clocks, respectively. Because the time
              of midnight varies between locations, time zones are set up to
              facilitate the use of a uniform standard time. Other conventions
              are sometimes used, for example the Jewish religious calendar
              counts days from sunset to sunset, so the Jewish Sabbath begins at
              sundown on Friday. In astronomy, a day begins at noon so that
              observations throughout a single night are recorded as happening
              on the same day.
            </p>
            <p className="span-convert-content">
              In specific applications, the definition of a day is slightly
              modified, such as in the SI day {"("}exactly 86,400 seconds{")"}{" "}
              used for computers and standards keeping, local mean time
              accounting of the Earth's natural fluctuation of a solar day, and
              stellar day and sidereal day {"("}using the celestial sphere{")"}{" "}
              used for astronomy. In most countries outside of the tropics,
              daylight saving time is practiced, and each year there will be one
              23-hour civil day and one 25-hour civil day. Due to slight
              variations in the rotation of the Earth, there are rare times when
              a leap second will get inserted at the end of a UTC day, and so
              while almost all days have a duration of 86,400 seconds, there are
              these exceptional cases of a day with 86,401 seconds {"("}in the
              half-century spanning 1972 through 2022, there have been a total
              of 27 leap seconds that have been inserted, so roughly once every
              other year{")"}.
            </p>
          </>
        )}

        <li className="li-convert-content">
          <h4>Week:</h4>
        </li>
        <p className="span-convert-content">
          A week is a unit of time equal to seven days. It is the standard time
          period used for short cycles of days in most parts of the world. The
          days are often used to indicate common work days and rest days, as
          well as days of worship. Weeks are often mapped against yearly
          calendars, but are typically not the basis for them, as weeks are not
          based on astronomy.
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
              The modern seven-day week can be traced back to the Babylonians,
              who used it within their calendar. Other ancient cultures had
              different week lengths, including ten in Egypt and an eight-day
              week for Etruscans. The Etruscan week was adopted by the Ancient
              Romans, but they later moved to a seven-day week, which had spread
              across Western Asia and the Eastern Mediterranean. In 321 AD,
              Emperor Constantine officially decreed a seven-day week in the
              Roman Empire, including making Sunday a public holiday. This later
              spread across Europe, then the rest of the world.
            </p>
            <p className="span-convert-content">
              In English, the names of the days of the week are Monday, Tuesday,
              Wednesday, Thursday, Friday, Saturday, and Sunday. In many
              languages, the days of the week are named after gods or planets
              visible to the eye. Such a week may be called a planetary week.
              Certain weeks within a year may be designated for a particular
              purpose, such as Holy Week in Christianity, Golden Week in China,
              and National Family Week in Canada. More informally, certain
              groups may advocate awareness weeks, which are designed to draw
              attention to a certain subject or cause. The term "week" may also
              be used to refer to a sub-section of the week, such as the
              workweek and weekend.
            </p>
          </>
        )}

        <li className="li-convert-content">
          <h4>Month</h4>
        </li>
        <p className="span-convert-content">
          A month is a unit of time, used with calendars, that is approximately
          as long as a natural orbital period of the Moon; the words month and
          Moon are cognates. The traditional concept of months arose with the
          cycle of Moon phases; such lunar months {"("}"lunations"{")"} are
          synodic months and last approximately 29.53 days, making for roughly
          12.37 such months in one Earth year. From excavated tally sticks,
          researchers have deduced that people counted days in relation to the
          Moon's phases as early as the Paleolithic age. Synodic months, based
          on the Moon's orbital period with respect to the Earth–Sun line, are
          still the basis of many calendars today and are used to divide the
          year. <br />
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
            Calendars, such as the internationally used Gregorian calendar, that
            developed from the Roman calendar system divide the year into 12
            months, each of which lasts between 28 and 31 days. The names of the
            months were Anglicized from various Latin names and events important
            to Rome, except for the months 9–12, which are named after the Latin
            numerals 7–10 {"("}septem, octo, novem, and decem{")"} because they
            were originally the seventh through tenth months in the Roman
            calendar. In the modern Gregorian calendar, the only month with a
            variable number of days is the second month, February, which has 29
            days during a leap year and 28 days otherwise.
          </p>
        )}

        <li className="li-convert-content">
          <h4>Year</h4>
        </li>
        <p className="span-convert-content">
          A year is the time taken for astronomical objects to complete one
          orbit. For example, a year on Earth is the time taken for Earth to
          revolve around the Sun. Generally, a year is taken to mean a calendar
          year, but the word is also used for periods loosely associated with
          the calendar or astronomical year, such as the seasonal year, the
          fiscal year, the academic year, etc. The term can also be used in
          reference to any long period or cycle, such as the Great Year. <br />
          {visible6 || (
            <span
              onClick={() => handleReadmore(6)}
              className="convert-content-readmore"
            >
              Read more .....
            </span>
          )}
        </p>
        {visible6 && (
          <p className="span-convert-content">
            Due to the Earth's axial tilt, the course of a year sees the passing
            of the seasons, marked by change in weather, the hours of daylight,
            and, consequently, vegetation and soil fertility. In temperate and
            subpolar regions around the planet, four seasons are generally
            recognized: spring, summer, autumn and winter. In tropical and
            subtropical regions, several geographical sectors do not present
            defined seasons; but in the seasonal tropics, the annual wet and dry
            seasons are recognized and tracked.
          </p>
        )}
      </ul>
    </>
  );
};

export default TimeContent;
