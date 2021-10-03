import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const MenuContainer = styled.div`
  position: absolute;
  width: 25%;
  height: 100%;
  right: 0;
  top: 0;
  background-color: ${color.main[500]};
  transition: all .3s;
  padding: 100px 20px 50px 20px;

  &.active {
    opacity: 1;
    transform: translateX(0);
  }
  &.in-active {
    opacity: 0.4;
    transform: translateX(100%);
  }

  button {
    position: absolute;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    color: #ffffff;
    font-size: 48px;
    transition: color .2s;

    &:hover {
      color: ${color.gray[400]}
    }
  }

  .menu-close-btn {
    top: 5px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  
  .todo-upload-btn {
    right: 20px;
  }

  @media ( max-width: 768px ) {}
`;

export const InputContainer = styled.div`
  width: 100%;
  padding: 0 0 20px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${color.gray[50]};
  border-radius: 4px;
  margin-bottom: 40px;

  h5 {
    padding: 12px 0 12px 14px;
    margin-bottom: 14px;
    font-size: 18px;
    border-bottom: 1px solid ${color.gray[300]};
  }

  textarea {
    width: 90%;
    height: 150px;
    margin: 0 auto;
    outline: none;
    border: 1px solid ${color.gray[300]};
    padding: 5px;
    font-size: 14px;
    resize: none;
  }

  &.title {
    textarea {
      height: 30px;
    }
  }
`;