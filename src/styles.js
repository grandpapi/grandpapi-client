import styled from 'styled-components';

//GLOBAL COMPONENTS

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #442c1d;
  padding: 1em;
  ul {
    display: flex;
  }
  li {
    display: inline-block;
    margin: 0rem 2rem;
    list-style: none;
    color: white;
  }
`;

//HOME PAGE COMPONENTS

export const HeroSection = styled.section`
  display: flex;
  background-color: #b0e2ab;
  padding-top: 2rem;
`;

export const H1 = styled.h1`
  font-family: 'Oxygen', sans-serif;
  font-size: 2.875rem;
  color: #442c1d;
  font-weight: bold;
`;

export const SplashHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b0e2ab;
  padding: .8rem 1rem;
  padding-right: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;

`;

export const NavLogo = styled.img`
  src: 'assets/logo-pink.png';
  height: 4.4375rem;
  width: auto;
`;

export const HeroButton = styled.button`
  color: #ff0098;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Oxygen', sans-serif;
  padding: .8rem 1rem;
  font-size: 1rem;
  border: none;
  background-color: #eaefbd;
`;
//
