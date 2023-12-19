import { useState } from "react";
const Faqs = (props) => {
  const { rs, index } = props;
  const [answersVisible, setAnswersVisible] = useState([]);
  const toggleAnswer = (index) => {
    setAnswersVisible((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = !newAnswers[index];
      return newAnswers;
    });
  };
  return (
    <div>
      <div key={rs.id} className="faq-item"></div>
      <div className="question-group-control">
        <div className="question-container" onClick={() => toggleAnswer(index)}>
          <span>{rs.question}</span>
          <div className={`arrow-icon ${answersVisible[index] ? "open" : ""}`}>
            &#8744;
          </div>
        </div>
        {answersVisible[index] && (
          <div className="answer-container">{rs.answer}</div>
        )}
      </div>
    </div>
  );
};

export default Faqs;
