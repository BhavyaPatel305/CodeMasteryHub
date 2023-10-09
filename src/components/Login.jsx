import { Avatar, Box, Button, Container, TextField } from '@mui/material'
import React from 'react'
import main_icon from '../Images/main_icon.png'

export const Login = () => {
    const avatarCSS = {
        margin: 'auto',
        width: '100px', 
        height: '100px', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%', // To make it a circle
      };
    const formCSS = {

        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px'
    }
  return (
    <div>
        <Container maxWidth="sm">
            <Box sx={{  bgcolor: '#cfe8fc', height: 'auto', borderRadius: '20px'}} >
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Avatar alt="CodeMasteryHub" src={main_icon} style={avatarCSS}/>
                </Box>
                <form style={formCSS}>
                    <TextField id='username' label='Username or E-mail' variant='outlined' style={{width:'80%'}} />
                    <br />
                    <TextField id='password' label='Password' variant='outlined' style={{width:'80%'}} />
                    <br />
                    
                    <Button variant='contained' style={{width:'80%'}}>Sign In</Button>
                    <br/>
                    Forgot Password?
                    <br/>
                    or you can sign in with
                    <br/><br/>
                    This site is protected by reCAPTCHA and the Google <span class="link"><a href="https://policies.google.com/privacy">Privacy Policy</a></span> and <span class="link"><a href="https://policies.google.com/terms">Terms of Service</a></span> apply.
                </form>   
            </Box>
        </Container>
    </div>
  )
}
