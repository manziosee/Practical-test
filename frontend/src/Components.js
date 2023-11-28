import styled from 'styled-components';


export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
`;

export const SignUpContainer = styled.div`
position: absolute;
top:0;
height:100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
opacity: 0;
z-index: 1;
${props => props.signinIn !== true ?`
transform: translateX(100%);
opacity:1;
z-index:5;
`
: null}
`;
export const SignInContainer = styled.div`
position: absolute;
top:0;
height:100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
${props => (props.signinIn !== true ?`
transform: translateX(100%);`: null)}
`;
export const Form = styled.form`
background:#fffff;
display: flex;
align -items: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`;
export const Title = styled.h1`
background-color:#eee;
border: none;
padding: 12px;
`;
export const Input = styled.Input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin 8px 0;
width: 100%;
`;
export const Button = styled.button`
border-radius: 20px;
border: 1px solid #ff4b2b;
background-color: #ff4b2b;
color: #ffff;
`;

