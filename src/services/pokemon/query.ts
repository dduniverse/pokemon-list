import {pokemonKeys} from './keys';
import {queryOptions} from '@tanstack/react-query';
import {getPokemonById, getPokemonsList} from './fetch';
import {PokemonByIdParams, PokemonsListParam} from './types';

export const pokemonQueryService = {
  getList: (params: PokemonsListParam) => {
    return queryOptions({
      queryKey: pokemonKeys.getList(params),
      queryFn: () => getPokemonsList(params),
    });
  },
  getById: (params: PokemonByIdParams) => {
    const {id} = params;

    return queryOptions({
      queryKey: pokemonKeys.getById(id),
      queryFn: () => getPokemonById(params),
      enabled: id !== 'undefined',
    });
  },
};