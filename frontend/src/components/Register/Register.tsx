import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useLazyRegisterQuery } from "../../services/auth/auth.api";
import { useAuth } from "../../context/AuthContext";

import { toast } from "react-toastify";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { updateAccessToken } = useAuth();
  const [register] = useLazyRegisterQuery();

  const handleRegister = async () => {
    const { data, error } = await register({ email, password });
    if (data?.success) {
      updateAccessToken(data.data);
      navigate("/");
    } else if (data?.error) {
      toast(data.error);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleRegister}
          >
            Register
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={handleLogin}
          >
            Back to Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
