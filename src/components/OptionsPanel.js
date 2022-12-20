import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./OptionsPanel.css";
import SingleOption from "./SingleOption";

const OptionsPanel = (props) => {
  const [selected, setSelected] = useState(false);
  const questions = useSelector((state) => state.answers.quest);

  useEffect(()=>{
    questions.map((i) => {
      if (i.selected !== null) {
        setSelected((prev) => !prev);
      }
    });
  },[questions])

  return (
    <div className="options-container" key={Math.random().toString()}>
      {questions.map((i) => {
        if (i.id === props.question.id) {
          return (
            <SingleOption
              key={Math.random().toString()}
              question={i}
              selected={selected}
            />
          );
        }
      })}
    </div>
  );
};

export default OptionsPanel;
