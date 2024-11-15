import { queryOptions } from "@tanstack/react-query";
import { fetchPokemonData, fetchPokemonDetailData } from "./fetch";

export const pokemonService = {
  getPokemonData: (itemsPerPage, region) =>
    queryOptions({
      queryKey: ['pokemonData', region],
      queryFn: () => fetchPokemonData(itemsPerPage, region),
      staleTime: 1000 * 60 * 5, 
    }),

  getPokemonDetailData: (pokemonId: number) =>
    queryOptions({
      queryKey: ['pokemonDetail', pokemonId],
      queryFn: () => fetchPokemonDetailData(pokemonId),
      staleTime: 1000 * 60 * 5, 
    }),
}