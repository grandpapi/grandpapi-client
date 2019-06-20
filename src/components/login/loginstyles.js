import styled from 'styled-components';


export const SignUpIn = styled.div`
display: flex;
flex-flow: column-reverse;
align-items: center;
justify-content: center;
text-align: center;
margin-bottom: 3vh;
margin-top: 3vh;
`;

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
margin-bottom: 1.5vh;
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
margin-bottom: 2vw;
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
