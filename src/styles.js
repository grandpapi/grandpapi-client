import styled from 'styled-components';

//GLOBAL COMPONENTS

export const BodyContainer = styled.div`
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10.5rem;
  padding: ${props => props.noPadding ? '0rem' : '0rem 3rem'};
`;

export const GlobalHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #442c1d;
  padding: .8rem 1rem;
  padding-right: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  margin-bottom: 3rem;

`;

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
  padding: .8rem 1.4rem;
  font-size: 1.3rem;
  border: none;
  background-color: #b0e2ab;
  &:focus {
    outline: #90be6d solid 2px !important;
  }
`;

export const PinkSpan = styled.span`
  color: #ff0098;
`;

export const FooterContainer = styled.footer`
  position: absolute;
  width: 100vw;
  bottom: 0;
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
  padding: .8rem 1.4rem;
  font-size: 1.3rem;  
  border: none;
  background-color: #eaefbd;
  &:focus {
    outline: #90be6d solid 2px !important;
}
`;

export const InstructContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img: {
    height: 18rem;
  }
  background-color: white;

`;

export const IntroSection = styled.section`
  text-align: center;
  width: 70%;
  margin: 10rem 0;
`;

export const StartBuildingSection = styled.section`
  margin-bottom: 6rem;
  padding-top: 3rem;
  border-top: .625rem solid #b0e2ab;
  text-align: center;
  width: 70%;
`;

export const IntroLtoR = styled.section`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 10rem;
  width: 83%;
`;

export const IntroGutterSpace = styled.section`
  margin-right: 4rem;
`;

export const IntroRtoL = styled.section`
  display: flex;
  margin-bottom: 10rem;
  width: 83%;
`;

//* Login Styles *//

export const FormContainer = styled.div`
display: flex;
flex-flow: column-reverse;
align-items: center;
justify-content: center;
text-align: center;
margin-bottom: 3vh;
margin-top: 3vh;
`;

//* Global Form Styles *//

export const FormHeading = styled.span`
font-family: 'Oxygen', sans-serif;
color: #442c1d;
margin-bottom: 2vh;
margin-top: 1vh;
font-size: 1.5em;
`;

export const Form = styled.form`
background-color: #eaefbd;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin-bottom: .5vh;
width: 30vw;
min-width: 200px;
padding: 1vw;
border-radius: 1px;
`;

export const FormLabel = styled.label`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
color: #442c1d;
margin: 1.5vh;
font-size: 1em;
font-family: 'Oxygen', sans-serif;
transition: all .75s;
text-transform: uppercase;
letter-spacing: 0.05em;
`;

export const FormInput = styled.input`
border: 0;
background-color: #b0e2ab;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 1.5vh;
height: 2.5em;
width: 20vw;
padding-left: .5em;
padding-right: .5em;
min-width: 150px;
font-size: 1em;
font-family: 'Montserrat', sans-serif;
cursor: text;
border-bottom: 1px solid transparent;

&:placeholder-shown + label {
  cursor: text;
  max-width: 66.66%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

&:focus {
  outline: 0 !important;
  border-bottom: 1px solid #666;
  background: #b0e2ab;
  transition: .75s;
}

&:focus + label {
  outline: 0 !important;
  cursor: pointer;
  transition: .75s;
}
`;

export const FormSubmitButton = styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin: 2vw;
font-family: 'Oxygen', sans-serif;
text-transform: uppercase;
background-color: #b0e2ab;
padding: 5px;
border-radius: 1px;
border: none;
color: #ff0098;
cursor: pointer;

&:focus {
  outline: #90be6d solid 2px !important;
}
`;

//*  Database List Styles *//

export const DatabaseUl = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 24vw;
    min-width: 220px;
    min-height: 220px;
    height: 24vw;
    list-style-type: none;
    text-align: center;
    margin: 3vw;
    background-color: #eaefbd;
    border-radius: 5px;
    border: 2px solid transparent;
    &:hover {
        border: 2px solid #90be6d;
      }
    
    div {
      width: 22vw;
      min-width: 200px;
      overflow-wrap: break-word;
      word-wrap: break-all;
      white-space: normal;
      }
  }

  a {
    display: block;
    font-size: 2rem;
    color: #ff0098;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: .2rem;
    text-decoration: none;
  }
`;

export const DBButton = styled(BodyButton)`
  background-color: #ff0098;
  color: #eaefbd;
  margin-bottom: 2vw;
  margin-top: 2vw;
`;

export const NewDBButton = styled.button`
  background-color: #eaefbd;
  border: 2px solid transparent;
  font-size: 4rem;
  color: #ff0098;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: .2rem;
    &:hover {
      span {
        display:none;
      }
    }

    &:hover:before {
      content:'Add new database';
      font-size: 2.5rem;
      cursor: pointer;
      }
    &:focus {
      outline: #90be6d solid 2px !important;
    }
`;

export const ViewDBButton = styled.button`
  background-color: #eaefbd;
  border: 2px solid transparent;
  font-size: 2rem;
  color: #ff0098;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: .2rem;
  overflow-wrap: break-word;
  word-wrap: break-all;
  white-space: normal;
  width: 22vw;
  &:hover {
      span {
        display:none;
      }
    }
    &:hover:before {
        content:'view database';
        cursor: pointer;
        color: #ff0098;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: .2rem;
        font-size: 2.3rem;
      }
    &:focus {
      outline: #90be6d solid 2px !important;
    }
`;

//* Model Entry Form *//

export const ModelUl = styled.ul`
  li {
    list-style-type: none;
  }
`;
