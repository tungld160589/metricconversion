const Answer03 = () => {
  return (
    <div className="answerCMP-container">
      <h1 className="answer-header">What is a nautical mile ?</h1>
      <p className="answer-p">
        A nautical mile is a unit of measurement used in navigation and maritime
        contexts. It is commonly used for measuring distances at sea or in the
        air. The nautical mile is based on the circumference of the Earth and is
        defined as one minute of latitude along any meridian.
      </p>
      <p className="answer-p">The formal definition is:</p>
      <p className="answer-p">1 nautical mile = 1 minute of latitude</p>
      <p className="answer-p">
        Since the Earth is approximately 21,600 nautical miles in circumference
        {"("}60 minutes of latitude per degree, and the Earth has 360 degrees of
        latitude{")"}, a nautical mile is roughly equal to one minute of
        latitude, which is approximately 1.852 kilometers or 1.15078 statute
        miles.
      </p>
      <p className="answer-p">
        The use of nautical miles is prevalent in aviation, maritime navigation,
        and oceanography, where accurate distance measurements are crucial for
        safety and precision. It simplifies navigation calculations because one
        nautical mile corresponds to one minute of latitude, making it easier to
        work with coordinates and charts.
      </p>
    </div>
  );
};

export default Answer03;
