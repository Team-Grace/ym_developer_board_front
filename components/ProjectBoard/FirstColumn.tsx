import React from 'react';
import MovableItem from './MovableItem';
import { Column } from './style';

const FirstColumn = () => {
  return (
      <Column>
        Column 1
        <MovableItem />
      </Column>
  )
}

export default FirstColumn;