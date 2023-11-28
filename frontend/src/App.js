import React from "react";
import * as Components from './Components'
import * as SignUpContainer from './SignUpContainer';

function App() {
  const [signIn] = React.useState(true);
  return(
   <Components.Container>
    <SignUpContainer.SignUpContainer signinIn={signIn}>
      <Components.Form>
        <Components.Title>Create Account</Components.Title>
        <Components.Input type='text' placeholder ='Name'/>
        <Components.Input type ='email' placeholder ='Email'/>
        <Components.Input type ='password' placeholder ='Password'/>
        <Components.Button>Sign Up</Components.Button>
      </Components.Form>
    </SignUpContainer.SignUpContainer>

    <Components.SignInContainer signinIn={signIn}>
    <Components.From>
        <Components.Title>Sign In</Components.Title>
        <Components.Input type='email' placeholder='Email'/>
        <Components.Input type='password'placeholder='Password'/>
        <Components.Anchor href='#'>Forgot your password</Components.Anchor>
        <Components.Button>signin In</Components.Button>
      </Components.From>

    </Components.SignInContainer>
      
    

    <Components.OverlayContainer signin In={signIn}>
      <Components.Overlay signIn={signIn}>

      <Components.LeftOverLayPanel signinIn={signIn}>
        <Components.Title>Welcome Back!</Components.Title>
        <Components.Paragraph>
          To keep connected please login with your personal info
        </Components.Paragraph>
        <Components.GhostButton onclick={()=>ToggleEvent(true)}>
          Sign In
        </Components.GhostButton>
        </Components.LeftOverLayPanel>

        <Components.RightOverlayPane signinIn={signIn}>
          <Components.Title>Hello, Friend!</Components.Title>
          <Components.Paragraph>
            Enter Your personal details and Start journey with us
          </Components.Paragraph>
            <Components.GhostButton onclick={()=>ToggleEvent(false)}>
              Signin Up

            </Components.GhostButton>
        </Components.RightOverlayPane>


      </Components.Overlay>
      </Components.OverlayContainer> 
   </Components.Container> 
  )
}


      

export default App;
