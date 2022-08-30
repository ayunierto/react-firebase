import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField'
import { Container, Button, Grid, Alert } from "@mui/material";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signin, loginWithGoogle } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signin(user.email, user.password);
      navigate("/");
    } catch (error) {
      // Modificadno mensajes de errors
      // if (error.code === "auth/internal-error") {
      //   setError('Invalid email')
      // }
      setError(error.message);
    }
  };

  const handleGoogleSingin = async () => {
    try {
      await loginWithGoogle()
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
    navigate("/");
  }

  return (
    <Container className="mt-10">
      <form onSubmit={handleSubmit}>

        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"

        >
          {error && <Alert severity="warning">{error}</Alert>
          }


          <Grid item xs={10} md={6}>
            <TextField
              id="email"
              label="Email"
              value={user.email}
              onChange={handleChange}
              name="email"
            />
          </Grid>

          <Grid item xs={10} md={6}>
            <TextField
              id="password"
              label="Password"
              value={user.password}
              onChange={handleChange}
              name="password"
            />
          </Grid>

          <Grid item xs={10} md={6}>
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Grid>
        </Grid>

      </form>

      <button variant="outlined" color="default" onClick={handleGoogleSingin}>
        Login Google
      </button>

    </Container>
  );
}

export default Login;
