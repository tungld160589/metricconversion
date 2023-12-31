import { useEffect } from "react";
import { useState } from "react";
const Faqs = (dataFaqs) => {
  const { faqs, index, y } = dataFaqs;
  const [answersVisible, setAnswersVisible] = useState([]);
  const [visibleFAnswer, setVisibleFAnswer] = useState([]);
  // Xử lý sự kiện click vào câu hỏi
  const toggleAnswer = (index) => {
    setAnswersVisible((prev) => visibleStatus(prev, index));
  };
  // Xử lý sự kiện click vào Read More
  const toggleFAnswer = (index) => {
    setVisibleFAnswer((prev) => visibleStatus(prev, index));
  };
  // Xử lý sự kiện click vào nut exit
  const toggleBtnExit = (index) => {
    if (visibleFAnswer[index]) {
      setVisibleFAnswer((prev) => visibleStatus(prev, index));
    }
  };

  useEffect(() => {
    // function khi nhấn nút ESC trên bàn phím
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setVisibleFAnswer([]);
      }
    };
    //Xử lý sự kiện khi nhấn nút bất kỳ trên bàn phím
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  // Chuyển trạng thái visible băng cách tạo ra 1 mảng trạng thái theo phần tử index
  const visibleStatus = (prev, index) => {
    const newItem = [...prev];
    newItem[index] = !newItem[index];
    return newItem;
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
