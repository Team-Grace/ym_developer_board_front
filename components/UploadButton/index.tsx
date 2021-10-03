import React from 'react';
import { ButtonIcon } from './style';

interface Props {
  onClick: () => void;
}

const UploadButton = ({ onClick }: Props) => {
  return (
    <ButtonIcon onClick={onClick}>
      +
    </ButtonIcon>
  )
};

export default UploadButton;