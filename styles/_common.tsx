import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1400px;
  min-width: 768px;
  border: 1px solid ${color.main[500]};
  border-radius: 16px;
  padding: 40px;
`;
