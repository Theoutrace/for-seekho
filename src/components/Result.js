import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import res from "../images/result.png";
import celeb from "../images/celeb.gif";
import "./Result.css";

const Result = () => {
  const questions = useSelector((state) => state.answers.quest);
  const reviews = useSelector((state) => state.answers.review);
  const [correct, setCorrect] = useState(0);
  const [score, setScore] = useState(0);
  //   const [celebrate, setCelebrate] = useState(false)

  useEffect(() => {
    const correctAns = reviews.filter((i) => i.answer === i.correct);
    setCorrect(correctAns.length);
    setScore(((correctAns.length / questions.length) * 100).toFixed(2));
  }, []);

  return (
    <div className="result-component-contaier">
      <div className="result-img">
        {score == 100 ? <><img src={celeb} alt="" /><p>Awesome performance</p></> : <img src={res} alt="" />}
      </div>
      <h2>You have successifully submitted your assessment</h2>
      <h3>Questions asked : {questions.length}</h3>
      <h3>You Answered : {reviews.length}</h3>
      <h3>Correct Answer: {correct}</h3>
      <h2>Score : {score}</h2>
    </div>
  );
};

export default Result;
