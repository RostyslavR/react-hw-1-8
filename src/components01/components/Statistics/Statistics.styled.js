import styled from 'styled-components';

const rndNumber = props => {
  return props.typeItem.split('').reduce((a, v) => a + v.charCodeAt());
};

const randomColor = props =>
  `#${Math.floor(rndNumber(props) * 16277215).toString(16)}`;

export const StatSection = styled.section`
  padding: 20px;
  background-color: lightgray;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;

  span {
    display: block;
  }
`;

export const StatItem = styled.li`
  flex: 1 10%;
  background-color: ${randomColor};
`;
