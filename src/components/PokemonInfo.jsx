import React from 'react';
import { Box, Typography } from '@mui/material';

export const PokemonInfo = (props) => {
    const { pokemon } = props;
    return <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="img"/>
        <Box paddingX={5}>
            <Typography variant="h4">{pokemon.name.toUpperCase()}</Typography>
            <Typography variant="h5">Height: {pokemon.height}</Typography>
            <Typography variant="h5">Weight: {pokemon.weight}</Typography>
            <Typography variant="h5">Abilities: {pokemon.abilities.map(x => x.ability.name).join(', ')}</Typography>
            <Typography variant="h5">Types: {pokemon.types.map(x => x.type.name).join(', ')}</Typography>
        </Box>
    </div>
}
