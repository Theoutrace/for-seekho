import React from "react";
import { useDispatch, useSelector } from "react-redux";
import allQuestions from "../resource/Questions";
import { answerActions } from "../store/answer";
import "./SingleOption.css";

const SingleOption = (props) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.answers.review);
  const questions = useSelector((state) => state.answers.quest);

  const checkHandler = (question, selectedAns) => {
    // to get question number we search for idx here
    const idx = allQuestions.findIndex((i) => i.id === question.id);
    let arrNewQuest = [...questions];
    arrNewQuest[idx] = { ...arrNewQuest[idx], selected: selectedAns };
    dispatch(answerActions.updateQuestions(arrNewQuest));

    // to check for duplicate question number available we search of idn
    const idn = reviews.findIndex((i) => i.questionNumber === idx + 1);
    // console.log(idn);
    if (idn !== -1) {
      let arr = [...reviews];
      arr[idn] = { ...arr[idn], answer: selectedAns };
      console.log(arr);
      dispatch(answerActions.addToReview(arr));
    } else {
      dispatch(
        answerActions.addToReview([
          ...reviews,
          {
            questionNumber: idx + 1,
            answer: selectedAns,
            correct: allQuestions[idx].correct,
          },
        ])
      );
    }
  };

  return (
    <div className="singleOption-constiner">
      {props.question.opt.map((q) => {
        return (
          <div className="sd-single-opt" key={Math.random().toString()}>
            {props.question.selected && props.question.selected === q.value ? (
              <input
                key={Math.random().toString()}
                type="radio"
                id={q.value}
                onClick={() => checkHandler(props.question, q.value)}
                defaultChecked
              />
            ) : (
              <input
                key={Math.random().toString()}
                type="radio"
                id={q.value}
                onClick={() => checkHandler(props.question, q.value)}
              />
            )}

            <label key={Math.random().toString()} htmlFor={q.value}>
              {q.value}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default SingleOption;
