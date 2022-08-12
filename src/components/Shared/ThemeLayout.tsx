import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from "@mui/material/styles";
import { FC, ReactNode } from 'react';

interface IProps {
    children: ReactNode
}

const ThemeLayout: FC<IProps> = ({ children }) => {
    // A custom theme for this app
    const theme = createTheme({
        palette: {
            // primary: {
            //   main: "#556cd6",
            // },
            // secondary: {
            //   main: "#19857b",
            // },
        },
    });

    return (
        <ThemeProvider theme={theme} >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Box component="main" >
                {children}
            </Box>
        </ThemeProvider>
    )
}

export default ThemeLayout