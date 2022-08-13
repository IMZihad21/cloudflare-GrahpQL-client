import { Box, CircularProgress } from '@mui/material'

const MainLoader = () => {
    return (
        <Box sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <CircularProgress />
        </Box>
    )
}

export default MainLoader
