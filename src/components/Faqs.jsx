import { useEffect } from "react";
import { useState } from "react";
const Faqs = (dataFaqs) => {
  const { faqs, index, y } = dataFaqs;
  const [answersVisible, setAnswersVisible] = useState([]);
  const [visibleFAnswer, setVisibleFAnswer] = useState([]);
  var a;

  const toggleAnswer = (index) => {
    setAnswersVisible((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = !newAnswers[index];
      return newAnswers;
    });
  };

  const toggleFAnswer = (index) => {
    setVisibleFAnswer((prevFAnswers) => {
      const newFAnswers = [...prevFAnswers];
      newFAnswers[index] = !newFAnswers[index];
      return newFAnswers;
    });
  };

  const toggleBtnExit = (index) => {
    if (visibleFAnswer[index]) {
      setVisibleFAnswer((prevFAnsers) => {
        const newFAnswers = [...prevFAnsers];
        newFAnswers[index] = !newFAnswers[index];
        return newFAnswers;
      });
    }
  };

  return (
    <div>
      <div key={faqs.id} className="faq-item"></div>
      <div className="question-group-control">
        <div className="question-container" onClick={() => toggleAnswer(index)}>
          <span>{faqs.question}</span>
          <div className={`arrow-icon ${answersVisible[index] ? "open" : ""}`}>
            &#11167;
          </div>
        </div>
        {answersVisible[index] && (
          <div className="answer-container">
            <div>
              <p className="faq-sortanswer">{faqs.sortanswer}</p>
              {faqs.fullanswer && (
                <p
                  onClick={() => toggleFAnswer(index)}
                  className="answer-readmore"
                >
                  Read more ...
                </p>
              )}
            </div>
            {visibleFAnswer[index] && (
              <div>
                <div className="fqa-container-control" style={{ top: y + 10 }}>
                  <faqs.fullanswer />
                  <span
                    className="fqa-fullname-exitbtn"
                    onClick={() => toggleBtnExit(index)}
                  ></span>
                </div>

                <div className="fqa-bg-fullanswer"></div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Faqs;
