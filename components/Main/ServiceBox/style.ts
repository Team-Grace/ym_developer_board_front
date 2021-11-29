import styled from 'styled-components';
import { color } from 'config/colorSystem';

interface Icon {
  iconBgColor: string;
  iconColor: string
}
export const Wrapper = styled.div`
  position: relative;
  width: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ServiceBox = styled.div`
   position: relative;
    width: 350px;
    height: 280px;
    background-color: ${color.main[400]};
    border-radius: 20px;
    overflow: hidden;

    &:hover .icon{
      top: 30px;
      left: calc(50% - 40px);
      width: 80px;
      height: 80px;
      border-radius: 50%;
      transition-delay: 0s;

      svg {
        font-size: 2em;
        transition-delay: 0s;
      }
    }

    &:hover .content {
      transform: scale(1);
      transition-delay: 0.20s;
    }
`;

export const ServiceBoxIcon = styled.div<Icon>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.iconBgColor};
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  transition-delay: 0.20s;

  svg {
    font-size: 3.5em;
    color: ${props => props.iconColor};
    transition: 0.4s 0.20s;
  }
`;

export const ServiceBoxContent = styled.div`
    position: relative;
    padding: 20px;
    color: #fff;
    text-align: center;
    margin-top: 100px;
    z-index: 1;
    transform: scale(0);
    transition: 0.4s 0s;

    h2 {
      margin-top: 25px;
      margin-bottom: 5px;
    }
    p {
      font-weight: 300;
      line-height: 1.5em;
    }
`;
