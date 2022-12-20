import React from "react";
import allQuestions from "../resource/Questions";
import "./QuestionPanel.css";

const QuestionPanel = (props) => {
  const idx = allQuestions.findIndex((itm) => itm.id === props.question.id);

  return (
    <div className="question-pannel-container">
      <div className="question-heading">Question {idx + 1}: </div>
      <div className="question-text">
        <span>{props.question.quest}</span>
      </div>
    </div>
  );
};

export default QuestionPanel;
