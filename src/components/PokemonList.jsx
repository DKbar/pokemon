import React from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';

import { PokemonCard } from './PokemonCard';

export const PokemonList = (props) => {
    const { pokemons } = props;

    return  <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {pokemons.length !== 0
                    ? pokemons.map((pokemon, index) => <PokemonCard key={index} {...pokemon} />)
                    : <Box sx={{ margin: "0 auto" }} padding="10px">
                            <Typography variant="h5">Nothing found</Typography>
                    </Box>

            }
        </Grid>
    </Container>
}