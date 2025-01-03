import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicionar lógica do cadastro.
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
              Back to login.
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;