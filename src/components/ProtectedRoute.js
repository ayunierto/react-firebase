import { CircularProgress, Grid } from "@mui/material"
import { Navigate } from "react-router-dom"
import { useAuth } from "../context/authContext"

export function ProtectedRoute({ children }) {

    const { user, loading } = useAuth()

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

    if (!user) {
        return <Navigate to="/login"></Navigate>
    }

    return (
        <>{children}</>
    )
}