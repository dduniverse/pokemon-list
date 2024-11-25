import { queryOptions } from "@tanstack/react-query";
import { fetchPokemonData, fetchPokemonDetailData } from "./fetch";

export const pokemonService = {
  getPokemonData: (region: string, offset: number) =>
    queryOptions({
      queryKey: region === "All" ? ['pokemonData', region, offset]: ['pokemonData', region],
      queryFn: () => fetchPokemonData(region, offset),
    }),

  getPokemonDetailData: (pokemonId: number) =>
    queryOptions({
      queryKey: ['pokemonDetail', pokemonId],
      queryFn: () => fetchPokemonDetailData(pokemonId),
    }),
}