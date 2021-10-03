import React from 'react';
import { ButtonIcon } from './style';

interface Props {
  onClick: () => void;
}

const InsertButton = ({ onClick }: Props) => {
  return (
    <ButtonIcon onClick={onClick}>
      +
    </ButtonIcon>
  )
};

export default InsertButton;