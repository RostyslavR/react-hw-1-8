import styled from 'styled-components';

const statusColor = props => (props.status ? 'green' : 'red');

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px;
  li {
    display: flex;
    gap: 20px;
    align-items: center;
    width: 300px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  p {
    font-size: 30px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${statusColor};
`;
