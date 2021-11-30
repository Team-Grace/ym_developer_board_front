import React from 'react';
import { Wrapper, ServiceBox, ServiceBoxContent, ServiceBoxIcon } from './style';
import Link from 'next/link';

interface Props {
  contentList: {
    title: string;
    desc: string;
    icon: React.ReactNode;
    iconBgColor: string;
    iconColor: string;
    url: string;
  }[];
}
const MainServiceBox = ({ contentList }: Props) => {
  return (
    <Wrapper>
      {contentList && contentList.map((content, idx) => (
        <Link href={content.url} key={idx}>
          <a>
            <ServiceBox >
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
          </a>
        </Link>
      ))}
    </Wrapper>
  );
};

export default MainServiceBox;