import React from 'react'
import {Box, Button} from '@mui/material';
import {TextField} from "./TextField";

export const Search = ({cb = Function.prototype}) => {
    const [value, setValue] = React.useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return <Box sx={{ display: "flex" }} >
        <TextField onKeyDown={handleKey} onChange={(e) => setValue(e.target.value)} />
        <Button variant="contained" color="success" onClick={handleSubmit}>Поиск</Button>
    </Box>
}