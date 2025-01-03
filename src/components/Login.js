import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação do email.
    const emailIsValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    setEmailError(!emailIsValid);

    // Validação da senha.
    const passwordIsValid = password.length >= 5;
    setPasswordError(password.length < 5);

    if (!emailIsValid || !passwordIsValid) {
      setHelperText('Please fill in the fields correctly.');
      return;
    }

    setHelperText('');

    // Adicionar lógica do login.
  };

  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1b',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#292929',
            padding: 3,
            borderRadius: 2,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography 
            variant="h4"
            sx={{
              color: 'white',
              marginBottom: 2,
              fontSize: '45px',
              fontFamily: 'Playfair Display, serif',
            }}
          >
            OrganizaMe
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? 'Email is in invalid format.' : ''}
              sx={{
                input: {
                  color: 'white',
                  backgroundColor: '#373737',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              helperText={passwordError ? 'Password must be at least 5 characters long.' : ''}
              sx={{
                input: {
                  color: 'white',
                  backgroundColor: '#373737',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#5494bc',
                color: 'white',
                width: '100%',
                marginTop: 2,
                '&:hover': {
                  backgroundColor: '#3b7a99',
                },
              }}
            >
              Login
            </Button>
          </form>
          {helperText && (
            <Box sx={{ color: 'red', marginTop: 2, fontWeight: 'normal' }}>
              {helperText}
            </Box>
          )}
        </Box>

        <Box
          sx={{
            backgroundColor: '#292929',
            width: '100%',
            maxWidth: '400px',
            padding: 3,
            marginTop: 2,
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ color: 'white' }}>
            Don't have an account?{' '}
            <a href="/signup" style={{ color: '#5494bc', textDecoration: 'none' }}>
              Sign up here.
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;