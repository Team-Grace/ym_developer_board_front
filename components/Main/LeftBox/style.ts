import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const Wrapper = styled.div`
  width: 350px;
  height: 580px; 
  margin-right: 20px;
  background-color: #0c2c63;
  border-radius: 20px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;


  a {
    position: relative;
    display: inline;
    text-decoration: none;
    color: #fff;
    font-size: 50px;
    text-align: center;
    margin-bottom: 20px;
    transition: .3s;
    
    &:hover {
      color: #a6c8ff;
    }

    &:hover ::after {
      content: "START";
      position: absolute;
      font-size: 18px;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
    }
  }
`;

export const VersionContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
  min-height: 350px;
  max-height: 350px;
  box-shadow: 0 0 4px #a5a5a5;
  display: flex;
  align-items: center;
`;