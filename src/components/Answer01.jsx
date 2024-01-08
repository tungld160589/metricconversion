const Answer01 = () => {
  return (
    <div className="answerCMP-container">
      <center>
        <h1 className="answer-header">
          How do I enter numbers in Scientific Notation ?
        </h1>
      </center>
      <p className="answer-p">
        Scientific notation is a way of expressing numbers that are very large
        or very small in a concise and standardized form. It is written in the
        form:
      </p>
      <p className="answer-p">
        {" "}
        a x 10<sup>n</sup>
      </p>
      <p className="answer-p">
        where <u>a</u> is a number greater than or equal to 1 and less than 10,
        and <u>n</u> is an integer. Here's how you can enter numbers in
        scientific notation:
      </p>
      <ol className="answer-ol">
        <li className="answer-li-ol">
          <h5>For Large Numbers:</h5>
        </li>
        <ul className="answer-ul">
          <li className="answer-li-ul">
            Move the decimal point to the right until you have a number between
            1 and 10.
          </li>
          <li className="answer-li-ul">
            Count the number of places you moved the decimal point. This count
            becomes the exponent {"("} <u>n</u>
            {")"}.
          </li>
          <li className="answer-li-ul">
            Express the number as a x 10<sup>n</sup>, where <u>a</u> is the new
            number, and <u>n</u> is the count from the decimal point movement.
          </li>
        </ul>
        <p className="answer-p">
          For example, to write 3,200,000 in scientific notation: 3.2 x 10
          <sup>6</sup> {"("}Moved the decimal point six places to the left, and
          n=6{")"}.
        </p>
        <li className="answer-li-ol">
          <h5>For Small Numbers:</h5>
        </li>
        <ul className="answer-ul">
          <li className="answer-li-ul">
            Move the decimal point to the right until you have a number between
            1 and 10.
          </li>
          <li className="answer-li-ul">
            Count the number of places you moved the decimal point. This count
            becomes the exponent {"("}
            <u>n</u>
            {")"}, but it is negative this time.
          </li>
          <li className="answer-li-ul">
            Express the number as a x 10<sup>n</sup> , where <u>a</u> is the new
            number, and <u>n</u> is the count from the decimal point movement.
          </li>
          <p className="answer-p">
            For example, to write 0.000045 in scientific notation: 4.5 x 10
            <sup>-5</sup>
            {"("}Moved the decimal point five places to the right, and <u>n</u>{" "}
            = 5 {")"}
          </p>
        </ul>
      </ol>
      <p className="answer-p">
        {" "}
        When entering these numbers into a calculator or a computer, you may use
        the "EE" {"("}Enter Exponent{")"} button or the "x10^" button, depending
        on the model. For example, to enter 3.2 x 10<sup>6</sup>, you can input
        it as 3.2E6 or 3.2 x 10<sup>6</sup>.Check your device's manual for
        specific instructions.
      </p>
    </div>
  );
};

export default Answer01;
