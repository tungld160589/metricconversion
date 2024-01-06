import { useState } from "react";
const CurrencyContent = () => {
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
          <h4>USD:</h4>
        </li>
        <p className="span-convert-content">
          The United States dollar {"("}symbol: $; currency code: USD; also
          abbreviated US$ to distinguish it from other dollar-denominated
          currencies; referred to as the dollar, U.S. dollar, American dollar,
          or colloquially buck{")"} is the official currency of the United
          States and several other countries. The Coinage Act of 1792 introduced
          the U.S. dollar at par with the Spanish silver dollar, divided it into
          100 cents, and authorized the minting of coins denominated in dollars
          and cents. U.S. banknotes are issued in the form of Federal Reserve
          Notes, popularly called greenbacks due to their predominantly green
          color.
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
          <>
            <p className="span-convert-content">
              The monetary policy of the United States is conducted by the
              Federal Reserve System, which acts as the nation's central bank.
            </p>
            <p className="span-convert-content">
              The U.S. dollar became an important international reserve currency
              after the First World War, and displaced the pound sterling as the
              world's primary reserve currency by the Bretton Woods Agreement
              towards the end of the Second World War. The dollar is the most
              widely used currency in international transactions, and a
              free-floating currency. It is also the official currency in
              several countries and the de facto currency in many others, with
              Federal Reserve Notes {"("}
              and, in a few cases, U.S. coins{")"} used in circulation.
            </p>
          </>
        )}

        <li className="li-convert-content">
          <h4>VND:</h4>
        </li>
        <p className="span-convert-content">
          VND đồng has been the currency of Vietnam since 3 May 1978. It is
          issued by the State Bank of Vietnam.The dong was also the currency of
          the predecessor states of North Vietnam and South Vietnam, having
          replaced the previously used French Indochinese piastre.
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
            Formerly, it was subdivided into 10 hao {"("}hào{")"}, which were
            further subdivided into 10 xu, neither of which are now used due to
            inflation. The Vietnamese dong has increasingly moved towards
            exclusively using banknotes, with lower denominations printed on
            paper and denominations over 10,000 dong, worth about 40¢ dollar or
            euro, printed on polymer. As of 2022, no coins are used. Generally,
            Vietnam is moving towards digital payments. The 500,000-dong note{" "}
            {"("}VND
            {")"} is the highest-denomination banknote in circulation in
            Vietnam. The note is dark blue in color and has been in circulation
            since 2003
          </p>
        )}

        <li className="li-convert-content">
          <h4>EUR:</h4>
        </li>
        <p className="span-convert-content">
          The euro {"("}symbol: €; currency code: EUR{")"} is the official
          currency of 20 of the 27 member states of the European Union. This
          group of states is officially known as the euro area or, commonly, the
          eurozone, and includes about 344 million citizens as of 2023. The euro
          is divided into 100 euro cents.
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
              The currency is also used officially by the institutions of the
              European Union, by four European microstates that are not EU
              members, the British Overseas Territory of Akrotiri and Dhekelia,
              as well as unilaterally by Montenegro and Kosovo. Outside Europe,
              a number of special territories of EU members also use the euro as
              their currency. Additionally, over 200 million people worldwide
              use currencies pegged to the euro.
            </p>
            <p className="span-convert-content">
              The euro is the second-largest reserve currency as well as the
              second-most traded currency in the world after the United States
              dollar. As of December 2019, with more than €1.3 trillion in
              circulation, the euro has one of the highest combined values of
              banknotes and coins in circulation in the world.
            </p>
            <p className="span-convert-content">
              The name euro was officially adopted on 16 December 1995 in
              Madrid. The euro was introduced to world financial markets as an
              accounting currency on 1 January 1999, replacing the former
              European Currency Unit {"("}ECU{")"} at a ratio of 1:1 {"("}
              US$1.1743 at the time{")"}. Physical euro coins and banknotes
              entered into circulation on 1 January 2002, making it the
              day-to-day operating currency of its original members, and by
              March 2002 it had completely replaced the former currencies.
            </p>
            <p className="span-convert-content">
              Between December 1999 and December 2002, the euro traded below the
              US dollar, but has since traded near parity with or above the US
              dollar, peaking at US$1.60 on 18 July 2008 and since then
              returning near to its original issue rate. On 13 July 2022, the
              two currencies hit parity for the first time in nearly two decades
              due in part to the 2022 Russian invasion of Ukraine.
            </p>
          </>
        )}

        <li className="li-convert-content">
          <h4>JPY:</h4>
        </li>
        <p className="span-convert-content">
          The yen is the official currency of Japan. It is the third-most traded
          currency in the foreign exchange market, after the United States
          dollar {"("}US${")"} and the euro.It is also widely used as a third
          reserve currency after the US dollar and the euro.
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
            {" "}
            <p className="span-convert-content">
              The New Currency Act of 1871 introduced Japan's modern currency
              system, with the yen defined as 1.5 g {"("}0.048 troy ounces{")"}{" "}
              of gold, or 24.26 g {"("}0.780 troy ounces{")"} of silver, and
              divided decimally into 100 sen or 1,000 rin. The yen replaced the
              previous Tokugawa coinage as well as the various hansatsu paper
              currencies issued by feudal han
              {"("}fiefs{")"}. The Bank of Japan was founded in 1882 and given a
              monopoly on controlling the money supply.
            </p>
            <p className="span-convert-content">
              Following World War II, the yen lost much of its prewar value. To
              stabilize the Japanese economy, the exchange rate of the yen was
              fixed at ¥360 per US$ as part of the Bretton Woods system. When
              that system was abandoned in 1971, the yen became undervalued and
              was allowed to float. The yen had appreciated to a peak of ¥271
              per US$ in 1973, then underwent periods of depreciation and
              appreciation due to the 1973 oil crisis, arriving at a value of
              ¥227 per US$ by 1980.
            </p>
            <p className="span-convert-content">
              Since 1973, the Japanese government has maintained a policy of
              currency intervention, so the yen is under a "dirty float" regime.
              The Japanese government focused on a competitive export market,
              and tried to ensure a low exchange rate for the yen through a
              trade surplus. The Plaza Accord of 1985 temporarily changed this
              situation; the exchange rate fell from its average of ¥239 per
              dollar in 1985 to ¥128 in 1988 and led to a peak rate of ¥80
              against the US$ in 1995, effectively increasing the value of
              Japan's GDP in dollar terms to almost that of the United States.
              Since that time, however, the world price of the yen has greatly
              decreased. The Bank of Japan maintains a policy of zero to
              near-zero interest rates and the Japanese government has
              previously had a strict anti-inflation policy.
            </p>
          </>
        )}

        <li className="li-convert-content">
          <h4>CNY:</h4>
        </li>
        <p className="span-convert-content">
          Renminbi {"("}CNY; abbreviation: RMB{")"} is the official currency of
          the People's Republic of China.It is the world's 5th most traded
          currency as of April 2022
        </p>
        <p className="span-convert-content">
          The yuan {"("}Chinese: 元 or simplified Chinese: 圆; traditional
          Chinese: 圓; pinyin: yuán{")"} is the basic unit of the renminbi, but
          the word is also used to refer to the Chinese currency generally,
          especially in international contexts. One yuan is divided into 10 jiao{" "}
          {"("}Chinese: 角; pinyin: jiǎo{")"}, and the jiao is further
          subdivided into 10 fen
          {"("}Chinese: 分; pinyin: fēn{")"}. The renminbi is issued by the
          People's Bank of China, the monetary authority of China
        </p>
      </ul>
    </>
  );
};

export default CurrencyContent;
