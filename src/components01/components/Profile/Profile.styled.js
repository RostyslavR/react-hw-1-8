import styled from 'styled-components';

export const ProfileBox = styled.div`
  width: 300px;
  margin: 0 auto 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Description = styled.div`
  padding: 10px;
  text-align: center;
  /* border-radius: 10%; */

  background-color: aqua;
  img {
    margin-bottom: 20px;
  }
`;

export const UserName = styled.p`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 700;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: lightcyan;
  li {
    flex: 1 20%;
    text-align: center;
  }

  span {
    display: block;
    :nth-child(2) {
      font-weight: 700;
    }
  }
`;
