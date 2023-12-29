import React, { useState } from "react";

const ViewMore = ({ content, maxChars }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  console.log(content);
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: showFullContent ? content : content.slice(0, maxChars),
        }}
      />
      {!showFullContent && content.length > maxChars && (
        <button onClick={toggleContent}>View More</button>
      )}
    </div>
  );
};

export default ViewMore;
