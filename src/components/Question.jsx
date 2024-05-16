import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectOption } from '../features/quiz/quizSlice';
import { QuestionContainer, OptionContainer } from '../styles';
import Option from './Option';

const Question = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, selectedOptions } = useSelector((state) => state.quiz);
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (index) => {
    dispatch(selectOption(index));
  };

  return (
    <QuestionContainer>
      <h2>{currentQuestion.question}</h2>
      <OptionContainer>
        {currentQuestion.options.map((option, index) => (
          <Option 
            key={index} 
            text={option} 
            onSelect={() => handleOptionSelect(index)} 
            isSelected={selectedOptions[currentQuestionIndex] === index} 
          />
        ))}
      </OptionContainer>
    </QuestionContainer>
  );
};

export default Question;
