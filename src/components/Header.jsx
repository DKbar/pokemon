// import * as React from 'react';
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const Header = () => {
    return <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    React Pokemon
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>;
}