import React, { useEffect, useState } from "react";
import "./TestPage.css";
import OptionsPanel from "../components/OptionsPanel";
import QuestionPanel from "../components/QuestionPanel";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import Result from "../components/Result";

const TestPage = (props) => {
  const questions = useSelector((state) => state.answers.quest);
  const reviews = useSelector((state) => state.answers.review);

  const [ques, setQues] = useState(questions[0]);
  const [end, setEnd] = useState(false);
  const [hideNxt, setHideNxt] = useState(false);

  useEffect(()=>{
    console.log('err');
    if(props.time===0){
      clearInterval(props.timerId)
      setEnd(true)
    }
  },[props.time])

  function nextQuest() {
    const idx = questions.findIndex((i) => i.id === ques.id);
    setQues(() => questions[idx + 1]);
    if (idx === questions.length - 2) {
      setHideNxt(true);
    }
  }

  function prevQuest() {
    const idx = questions.findIndex((i) => i.id === ques.id);
    setQues(() => questions[idx - 1]);
    setHideNxt(false);
  }



  return (
    <div className="test-page-container">

      {end ? (
        <Result />
      ) : (
        <>
          <div className="test-page-sidebar-container">
            <Sidebar time={props.time}/>
          </div>
          <div className="test-page-question-box-container">
            <div className="prev-next-btn-cntnr">
              {ques.id === questions[0].id ? (
                ""
              ) : (
                <button className="prev-btn" onClick={prevQuest}>
                  Previous
                </button>
              )}
              {hideNxt ? (
                ""
              ) : (
                <button className="next-btn" onClick={nextQuest}>
                  Next
                </button>
              )}
            </div>
            <div className="ques-opt-container-cnt">
              <QuestionPanel key={Math.random().toString()} question={ques} />
              <OptionsPanel key={Math.random().toString()} question={ques} />
            </div>
            <div className="submit-text-btn">
              {reviews.length!==0 && (
                <button
                  onClick={() => {
                    setEnd(true);
                    clearInterval(props.timerId)
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TestPage;
