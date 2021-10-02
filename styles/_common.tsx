import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 1400px;
  min-width: 1024px;
  border: 1px solid ${color.main[500]};
  padding: 100px 120px;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
