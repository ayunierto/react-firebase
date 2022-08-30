import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField'
import { Container, Button, Grid, Alert, Card, CardContent } from "@mui/material";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      // Modificadno mensajes de errors
      // if (error.code === "auth/internal-error") {
      //   setError('Invalid email')
      // }
      setError(error.message);
    }
  };

  return (
    <Container className="mt-10">
      <form onSubmit={handleSubmit}>

        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          alignContent="center"
        >
          <Card elevation={10}>
            <CardContent>
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                alignContent="center"
              >

                {error && <Alert severity="error">{error}</Alert>
                }


                <Grid item>
                  <TextField
                    id="email"
                    label="Email"
                    value={user.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="password"
                    label="Password"
                    value={user.password}
                    onChange={handleChange}
                    name="password"
                    type="password"
                  />
                </Grid>

                <Grid item>
                  <Button variant="contained" color="primary" type="submit">
                    Register
                  </Button>
                </Grid>
                <Grid item>
                  <Link to="/login">Already have an account?</Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

      </form>
    </Container>
  );
}

export default Register;
