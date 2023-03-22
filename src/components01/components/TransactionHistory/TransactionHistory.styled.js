import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  margin: 0 auto;

  thead {
    color: white;
    background-color: blue;
  }

  tbody {
    color: gray;
  }
`;

export const TR = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;

  th,
  td {
    flex: 1 40%;
    text-align: center;
  }

  :nth-child(2n) {
    background-color: lightblue;
  }
`;
