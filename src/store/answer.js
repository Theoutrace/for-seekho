import { createSlice } from "@reduxjs/toolkit";
import allQuestions from "../resource/Questions";

const answerSlice = createSlice({
    name: 'answer',
    initialState:{ review: [], quest: [...allQuestions] },
    reducers: {
        addToReview(state, action){
            state.review = action.payload
        },
        updateQuestions(state, action){
            state.quest = action.payload
        }
    }
})

export const answerActions = answerSlice.actions
export default answerSlice.reducer
