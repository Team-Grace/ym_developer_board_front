import React from 'react';
import { Wrapper, ServiceBox, ServiceBoxContent, ServiceBoxIcon } from './style';

interface Props {
  contentList: {
    title: string;
    desc: string;
    icon: React.ReactNode;
    iconBgColor: string;
    iconColor: string;
  }[];
}
const MainServiceBox = ({ contentList }: Props) => {
  return (
    <Wrapper>
      {contentList && contentList.map((content, idx) => (
        <ServiceBox key={idx}>
          <ServiceBoxIcon 
            className="icon" 
            iconBgColor={content.iconBgColor}
            iconColor={content.iconColor}
          >
            {content.icon}
          </ServiceBoxIcon>
          <ServiceBoxContent className="content">
            <h2>{content.title}</h2>
            <p>{content.desc}</p>
          </ServiceBoxContent>
        </ServiceBox>
      ))}
    </Wrapper>
  );
};

export default MainServiceBox;