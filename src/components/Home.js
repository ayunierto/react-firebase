import { Button, Card, CardContent, CircularProgress, Container, Typography, Grid } from "@mui/material"
import { useAuth } from "../context/authContext"

function Home() {

  const { user, logout, loading } = useAuth()


  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.log(error)
    }
  }

  if (loading) {
    return <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    >
      <CircularProgress />
    </Grid>
  }

  // const authContext = useContext(context)

  console.log(user)

  return (
    <Container>
      <Card elevation={10}>
        <CardContent>
          <Typography variant="h3" color="primary">Welcome {user.displayName || user.email}</Typography>

          <Button onClick={handleLogout}>
            Logout
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Home