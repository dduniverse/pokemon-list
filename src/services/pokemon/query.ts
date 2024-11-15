import { queryOptions } from "@tanstack/react-query";
import { fetchPokemonData, fetchPokemonDetailData } from "./fetch";

export const pokemonService = {
  getPokemonData: (region, offset) =>
    queryOptions({
      queryKey: ['pokemonData', region, offset],
      queryFn: () => fetchPokemonData(region, offset),
      staleTime: 1000 * 60 * 5, 
    }),

  getPokemonDetailData: (pokemonId: number) =>
    queryOptions({
      queryKey: ['pokemonDetail', pokemonId],
      queryFn: () => fetchPokemonDetailData(pokemonId),
      staleTime: 1000 * 60 * 5, 
    }),
}