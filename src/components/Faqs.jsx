import { useState } from "react";
const Faqs = (dataFaqs) => {
  const { faqs, index } = dataFaqs;
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
      <div key={faqs.id} className="faq-item"></div>
      <div className="question-group-control">
        <div className="question-container" onClick={() => toggleAnswer(index)}>
          <span>{faqs.question}</span>
          <div className={`arrow-icon ${answersVisible[index] ? "open" : ""}`}>
            &#11167;
          </div>
        </div>
        {answersVisible[index] && (
          <div className="answer-container">{faqs.answer}<span>Read more ...</span></div>
        )}
      </div>
    </div>
  );
};

export default Faqs;
