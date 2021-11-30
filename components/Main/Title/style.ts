import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const Wrapper = styled.div`
  width: 1200px;
`;
export const Title = styled.div`
  width: 100%;
  margin: 0 0 20px 80px;
  font-family: 'Luckiest Guy', cursive;
  color: #fff;
  display: flex;
  align-items: center;
`;

export const StaticText = styled.div`
  display: inline-block;
  margin-right: 20px;
  font-size: 45px;
`;

export const DynamicText = styled.p`
  letter-spacing: 4px;
  font-size: 55px;

  span {
    position: relative;
    color: #cbdfff;
    vertical-align: middle;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      height: 100%;
      width: 100%;
      border-left: 2px solid #fff;
      animation: typing 7s steps(15) infinite;
      background-color: ${color.main[500]};
    }
  }

  i {
    font-size: 55px;
    font-style: normal;
    line-height: 68px;
  }
`;

export const MainDescription = styled.div`
`;