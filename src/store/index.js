import { configureStore } from "@reduxjs/toolkit";
import answerReducer from "./answer";

const store = configureStore({
  reducer: {
    answers: answerReducer,
  },
});

export default store;
