import axios from 'axios';

import {API_URL} from './config';

const getPokemonList = (pokemonUrls) => {
    return axios.all(pokemonUrls.map(url => axios.get(url))).then(results => results.map(res => res.data));
}

const getPokemons = (page, limit) => {
    const offset = page === null ? 0 : (page-1) * limit;
    return axios.get(API_URL + `?offset=${offset}&limit=${limit}`).then(res => res.data);
}

const getPokemon = (name) => {
    return axios.get(API_URL + name).then(res => res.data);
}


export {getPokemonList, getPokemon, getPokemons};