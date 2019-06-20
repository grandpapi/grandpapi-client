import styled from 'styled-components';


export const DatabaseUl = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24vw;
    min-width: 220px;
    height: 24vw;
    list-style-type: none;
    text-align: center;
    margin-bottom: 5vw;
    background-color: #eaefbd;
    border-radius: 5px;
  }

  a {
    font-size: 1.5em;
    color: #ff0098;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: .2em;
  }
`;
