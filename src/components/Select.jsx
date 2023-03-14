import React from 'react';
import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';

export const SelectLabels = (props) => {
    const { limit, onChange } = props;
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
                value={limit}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
        <FormHelperText>Отображать на странице</FormHelperText>
      </FormControl>
}
