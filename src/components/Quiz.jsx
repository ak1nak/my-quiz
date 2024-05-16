import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextQuestion, prevQuestion, calculateScore, resetQuiz } from '../features/quiz/quizSlice';
import { QuizContainer, NavigationButton } from '../styles';
import Question from './Question';
import Progress from './Progress';

const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, score } = useSelector((state) => state.quiz);

  const handleNext = () => {
    dispatch(nextQuestion());
  };

  const handlePrev = () => {
    dispatch(prevQuestion());
  };

  const handleDone = () => {
    dispatch(calculateScore());
  };

  const handleReset = () => {
    dispatch(resetQuiz());
  };

  return (
    <QuizContainer>
      <h1>QUIZ</h1>
      {score === null ? (
        <>
          <Progress currentQuestionIndex={currentQuestionIndex} totalQuestions={questions.length} />
          <Question />
          <div>
            <NavigationButton onClick={handlePrev} disabled={currentQuestionIndex === 0}>Prev</NavigationButton>
            {currentQuestionIndex < questions.length - 1 ? (
              <NavigationButton onClick={handleNext}>Next</NavigationButton>
            ) : (
              <NavigationButton onClick={handleDone}>Done</NavigationButton>
            )}
          </div>
        </>
      ) : (
        <>
          <h2>Your score is {score}/{questions.length}</h2>
          <NavigationButton onClick={handleReset}>Reset</NavigationButton>
        </>
      )}
    </QuizContainer>
  );
};

export default Quiz;
