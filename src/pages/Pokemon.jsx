import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Button, Container} from '@mui/material';

import {PokemonInfo} from '../components/PokemonInfo';
import {getPokemon} from '../api';
import {Preloader} from '../components/Preloader';

export const Pokemon = () => {
    const [pokemon, setPokemon] = React.useState({});
    const { name } = useParams();
    const navigate = useNavigate()

    React.useEffect(
            () => {
                getPokemon(name).then(data => setPokemon(data))
            },
            [name]
    )

    return <Container>
        <Button variant="contained" color="success" onClick={() => navigate(-1)}>Go Back</Button>
        {!pokemon.id ? <Preloader/> : <PokemonInfo pokemon={pokemon} />}
    </Container>;
}