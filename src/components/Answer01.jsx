const Answer01 = () => {
  return (
    <div className="answerCMP-container">
      <center>
        <h1>How do I enter numbers in Scientific Notation ?</h1>
      </center>
      <p>
        Scientific notation is a way of expressing numbers that are very large
        or very small in a concise and standardized form. It is written in the
        form:
      </p>
      <p>
        {" "}
        a x 10<sup>n</sup>
      </p>
      <p>
        where <u>a</u> is a number greater than or equal to 1 and less than 10,
        and <u>n</u> is an integer. Here's how you can enter numbers in
        scientific notation:
      </p>
      <ul>
        <li>
          <h4>For Large Numbers:</h4>
        </li>
        <ol>
          <li>
            Move the decimal point to the right until you have a number between
            1 and 10.
          </li>
          <li>
            Count the number of places you moved the decimal point. This count
            becomes the exponent {"("} <u>n</u>
            {")"}.
          </li>
          <li>
            Express the number as a x 10<sup>n</sup>, where <u>a</u> is the new
            number, and <u>n</u> is the count from the decimal point movement.
          </li>
        </ol>
        For example, to write 3,200,000 in scientific notation: 3.2 x 10
        <sup>6</sup> {"("}Moved the decimal point six places to the left, and
        n=6{")"}.
        <li>
          <h4>For Small Numbers:</h4>
        </li>
      </ul>
    </div>
  );
};

export default Answer01;
