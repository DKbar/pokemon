import React from 'react';
import { Box, TextField as MuiTextField } from '@mui/material';

export const TextField = (props) => {
    const { value, onChange, onKeyDown } = props;
    return <Box
        component="form"
        noValidate
        autoComplete="off"
    >
        <MuiTextField value={value} onChange={onChange} onKeyDown={onKeyDown} label="Поиск" variant="standard" style={{ width: '300px', paddingRight: '15px'}} />
    </Box>
}