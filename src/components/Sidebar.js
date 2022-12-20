import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Sidebar.css";

const Sidebar = (props) => {
  const [selectedOpt, setSelectedOpt] = useState([]);
  const answers = useSelector((state) => state.answers.review);

  useEffect(() => {
    // make the array show objects in ascending order
    let arr = [];
    answers.map((itm) => {
      arr[itm.questionNumber - 1] = itm;
      return setSelectedOpt(arr);
    });
  }, [answers]);

  return (
    <div className="review-ans-container">
      <p>
        Time Left : {props.time} <span>Sec.</span>
      </p>
      {answers.length === 0 ? (
        <h4>Select any option of your choice!</h4>
      ) : (
        <h3>Your Answers</h3>
      )}
      {selectedOpt.map((itm) => {
        return (
          <div
            className="answer-question-number-cntnr"
            key={Math.random().toString()}
          >
            <div className="question-number-cntnr-sidebar-text">
              {itm.questionNumber}
            </div>
            <div>{itm.answer}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
