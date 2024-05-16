import React from 'react';
import { OptionButton } from '../styles';

const Option = ({ text, onSelect, isSelected }) => {
  return (
    <OptionButton onClick={onSelect} isSelected={isSelected}>
      {text}
    </OptionButton>
  );
};

export default Option;
