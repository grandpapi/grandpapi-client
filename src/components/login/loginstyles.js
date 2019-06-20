import styled from 'styled-components';


export const SignUpIn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin-bottom: 3vh;
margin-top: 3vh;
`;

export const SignUpInSpan = styled.span`
font-family: 'Oxygen', sans-serif;
color: #442c1d;
margin-bottom: 2vh;
margin-top: 1vh;
font-size: 1.5em;
`;

export const SignUpInForm = styled.form`
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

export const SignUpInLabel = styled.label`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
color: #442c1d;
margin-bottom: 1.5vh;
font-size: 1em;
font-family: 'Oxygen', sans-serif;
`;

export const SignUpInInput = styled.input`
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

&:focus {
  outline: #90be6d solid 2px !important;
}
`;

export const SignUpInButton = styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin-bottom: 2vw;
font-family: 'Oxygen', sans-serif;
text-transform: uppercase;
background-color: #b0e2ab;
padding: 5px;
border-radius: 1px;
border: none;
color: #ff0098;


&:focus {
  outline: #90be6d solid 2px !important;
}
`;
