import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  width: 85%;
  min-width: 1160px;
  height: 900px;
  padding: 100px 120px;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 0 12px black;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Dimmend = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;