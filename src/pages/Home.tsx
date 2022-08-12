import { useQuery } from '@apollo/client';
import { Box, Typography } from '@mui/material';
import { GET_ALL_OPEN_USERS } from '../configs/queries';

const Home = () => {
    const { loading, error, data } = useQuery(GET_ALL_OPEN_USERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Box>
            <Typography>
                {JSON.stringify(data)}
            </Typography>
        </Box>
    )
}

export default Home