import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  width: 90%;
  min-width: 1160px;
  border: 1px solid ${color.gray[200]};
  padding: 80px 120px;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
