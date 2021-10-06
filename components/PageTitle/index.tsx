import React from 'react';
import { PageTitleContainer } from './style'

interface Props {
  title: string;
}
const PageTitle = ({ title }: Props) => {
  return (
    <PageTitleContainer>
      <h5>{title}</h5>
    </PageTitleContainer>
  );
};

export default PageTitle;