import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [helperText, setHelperText] = useState('');

  useEffect(() => {
    document.title = 'OrganizaMe - SignUp';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação de nome de usuário.
    const usernameIsValid = username.length >= 5;
    setUsernameError(!usernameIsValid);

    // Validação do email.
    const emailIsValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    setEmailError(!emailIsValid);

    // Validação da senha.
    const passwordIsValid = password.length >= 5;
    setPasswordError(password.length < 5);

    // Validação da confirmação da senha.
    const confirmPasswordIsValid = password === confirmPassword;
    setConfirmPasswordError(!confirmPasswordIsValid);

    if (!usernameIsValid || !emailIsValid || !passwordIsValid || !confirmPasswordIsValid) {
      setHelperText('Please fill in all fields correctly.');
      return;
    }

    setHelperText('');

    // Lógica do cadastro
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
              label="Username"
              type="text"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={usernameError}
              helperText={usernameError ? 'Username must be at least 5 characters.' : ''}
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
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={confirmPasswordError}
              helperText={confirmPasswordError ? 'Passwords must match.' : ''}
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
              Sign Up
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
            Already have an account?{' '}
            <a href="/login" style={{ color: '#5494bc', textDecoration: 'none' }}>
              Log in here.
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;