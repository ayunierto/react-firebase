import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField'
import { Container, Button, Grid, Alert, Card, CardContent, Typography } from "@mui/material";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signin, loginWithGoogle, resetPassword } = useAuth();

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

  const handleResetPassword = async () => {
    if (!user.email) {
      return setError('Please enter your email')
    }
    try {
      await resetPassword(user.email)
      setError('we send you an email with a link to reset your password')

    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Container className="mt-10">

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={10}>
          <Card elevation={10}>
            <CardContent>

              <Typography variant="h3" color="initial">Login</Typography>

              <form onSubmit={handleSubmit}>

                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  rowSpacing={2}
                >
                  <Grid item>
                    {error && <Alert severity="warning">{error}</Alert>
                    }
                  </Grid>

                  <Grid item>
                    <TextField
                      id="email"
                      label="Email"
                      value={user.email}
                      onChange={handleChange}
                      name="email"
                    />
                  </Grid>

                  <Grid item >
                    <TextField fullWidth
                      id="password"
                      label="Password"
                      value={user.password}
                      onChange={handleChange}
                      name="password"
                    />
                  </Grid>

                  <Grid item >
                    <Button variant="contained" color="primary" type="submit">
                      Login
                    </Button>
                  </Grid>

                  <Grid item >
                    <Button variant="outlined" onClick={handleGoogleSingin}>
                      Login Google
                    </Button>
                  </Grid>

                  <Grid item >
                    <Link to='/register'>Don't have an account?</Link>
                  </Grid>

                  <Grid item >
                    <a href="#!" className="inline-block" onClick={handleResetPassword}>Forgot password?</a>
                  </Grid>

                </Grid>

              </form>

            </CardContent>

          </Card>
        </Grid>
      </Grid>

    </Container>
  );
}

export default Login;
