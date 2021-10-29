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

  h5 {
    font-family: 'Luckiest Guy', cursive;
    font-size: 32px;
    color: #011d49;
    margin-left: 30px;
    padding-top: 8px;
  }

  button {
    margin-right: 30px;
    background-color: #fff;
    outline: none;
    color: ${color.main[500]};
    border: 1px solid ${color.main[500]};
    font-size: 14px;
    padding: 7px 20px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: #ecf2fd;
    }
  }
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

export const NavItemContainer = styled.a`
  width: 100%;

  a {
    padding: 20px;
    text-decoration: none;
    display: flex;
    color: #111;

    &:hover {
      background-color: #0d203f;
      color: #fff;
    }
  }

  p {
    margin-left: 10px;
  }
`;