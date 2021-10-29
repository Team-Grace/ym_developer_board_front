import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 0 4px #a5a5a5;
`

export const NavContainer = styled.div`
  min-width: 230px;
  min-height: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0 0 4px #a5a5a5;
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  padding: 80px 70px 20px 40px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-left: 250px;
  background-color: #f7f6f6;
  display: flex;
  position: relative;
  flex-direction: column;
`;