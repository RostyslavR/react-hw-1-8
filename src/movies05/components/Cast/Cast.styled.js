import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  & h3 {
    max-width: 100px;
    font-size: 14px;
  }

  & p {
    max-width: 100px;
    font-size: 12px;
  }
`;
