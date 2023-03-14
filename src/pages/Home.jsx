import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import { getPokemonList, getPokemons } from '../api';
import { Preloader } from '../components/Preloader';
import { PokemonList } from '../components/PokemonList';
import { Paginator } from '../components/Paginator';
import { SelectLabels } from '../components/Select';
import { Search } from '../components/Search';

export const Home = () => {
    const [pokemons, setPokemons] = React.useState([]);
    const [filteredCatalog, setFilteredCatalog] = React.useState([])
    const [itemsCount, setItemsCount] = React.useState(0);
    const [pokemonUrls, setPokemonUrls] = React.useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = React.useState(parseInt(searchParams.get('page')) || 1);
    const [limit, setLimit] = React.useState(20);
    const [search, setSearch] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    const handleSearch = (str) => {
        setSearch(str);
        setFilteredCatalog(
            pokemons.filter((item) => item.name.toLowerCase().includes(str.toLowerCase()))
        );
    }

    React.useEffect(
            () => {
                getPokemons(page, limit).then(data => {
                    setPokemonUrls(data.results.map(x => x.url))
                    setItemsCount(data.count)
                    setLoading(false)
                })
            },
            [page, limit]
    )

    React.useEffect(
            () => {
                if (pokemonUrls.length !== 0){
                    getPokemonList(pokemonUrls).then(data => {
                        setPokemons(data);
                        setFilteredCatalog(search
                                ? data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
                                : data
                        );
                    })
                }
            },
            [pokemonUrls, search]
    )

    return <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",  paddingX: "24px"}}>
            <Box sx={{ display: "flex" }} >
                <Search cb={handleSearch} />
            </Box>
            <SelectLabels limit={limit} onChange={(limit) => setLimit(limit)} />
        </Box>
        {loading ? <Preloader /> :
            <React.Fragment>
                <PokemonList pokemons={filteredCatalog} />
                <Paginator itemsCount={itemsCount} page={page} setPage={setPage} limit={limit} setSearch={setSearch} />
            </React.Fragment>}
    </Container>
}