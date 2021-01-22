import styled from 'styled-components';

export const HeaderNav = styled.header`
  background-color: #0B0A0A;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  nav ul{
    display: flex;
  }
  li{
    margin: 0px 10px;
    list-style: none;
    a{
      text-decoration: none;
      color: white;
    }
  }
`;