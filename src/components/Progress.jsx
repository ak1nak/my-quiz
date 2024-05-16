import React from "react";

const Progress = ({ currentQuestionIndex, totalQuestions }) => (
  <p>
    Question {currentQuestionIndex + 1} of {totalQuestions}
  </p>
);

export default Progress;
