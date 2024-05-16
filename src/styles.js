import styled from 'styled-components';

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const OptionButton = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? 'lightblue' : 'white')};
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? 'lightblue' : '#f0f0f0')};
  }
`;

export const NavigationButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
