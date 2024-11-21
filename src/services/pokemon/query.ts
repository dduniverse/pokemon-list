import { queryOptions } from "@tanstack/react-query";
import { fetchPokemonData, fetchPokemonDetailData } from "./fetch";

export const pokemonService = {
  getPokemonData: (region, offset) =>
    queryOptions({
      queryKey: ['pokemonData', region, offset],
      queryFn: () => fetchPokemonData(region, offset),
    }),

  getPokemonDetailData: (pokemonId: number) =>
    queryOptions({
      queryKey: ['pokemonDetail', pokemonId],
      queryFn: () => fetchPokemonDetailData(pokemonId),
    }),
}