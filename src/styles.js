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

export const StyledNavUl = styled.ul`
    padding-inline-start: 0;
`;

export const BodyButton = styled.button`
  color: #ff0098;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Oxygen', sans-serif;
  padding: .8rem 1rem;
  font-size: 1rem;
  border: none;
  background-color: #b0e2ab;
`;

export const PinkSpan = styled.span`
  color: #ff0098;
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #442c1d;
  padding: 1em;
  ul {
    display: flex;
  }
  li {
    display: inline-block;
    margin: 0rem 2rem;
    list-style: none;
    color: #b0e2ab;
  }
    text-decoration: none;
    font-family: 'Oxygen', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
`;

export const FooterTagline = styled.section`
  p {
    color: #b0e2ab;
    font-family: 'Oxygen', sans-serif;
    font-size: 1rem;
    font-weight: bold;
  }
`;

//HOME PAGE COMPONENTS

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-around;
  background-color: #b0e2ab;
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

export const HeroTaglineSection = styled.section`
  margin: 0 7%;
  color: red;
`;

export const HeroImageSection = styled.section`
  margin-right: 7%;
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
