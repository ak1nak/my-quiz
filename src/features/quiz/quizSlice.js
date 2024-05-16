import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../../data";

const initialState = {
  questions,
  currentQuestionIndex: 0,
  selectedOptions: [],
  score: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectOption: (state, action) => {
      state.selectedOptions[state.currentQuestionIndex] = action.payload;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    calculateScore: (state) => {
      let score = 0;
      state.selectedOptions.forEach((option, index) => {
        if (option === state.questions[index].correct) {
          score += 1;
        }
      });
      state.score = score;
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.selectedOptions = [];
      state.score = null;
    },
  },
});

export const {
  selectOption,
  nextQuestion,
  prevQuestion,
  calculateScore,
  resetQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
