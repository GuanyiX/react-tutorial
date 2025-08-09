import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Stack,
  IconButton,
  InputAdornment,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import './Login.scss'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: replace with real auth
    alert(`Login with ${email}`)
  }

  const toggleShowPassword = () => setShowPassword((v) => !v)
  const preventMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()

  return (
    <Container maxWidth="xs" className="login-container">
      <Paper elevation={3} className="login-card">
        <Typography variant="h5" gutterBottom>Welcome back</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>Sign in to continue</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={toggleShowPassword}
                      onMouseDown={preventMouseDown}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="contained" size="large">Log in</Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  )
}
