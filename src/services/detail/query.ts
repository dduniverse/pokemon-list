import { queryOptions } from "@tanstack/react-query";
import { fetchPokemonDetailData } from "../pokemon/fetch";
import { fetchEvolutionData, fetchSpeciesData } from "./fetch";

export const pokemonDetailService = {
  getPokemonDetailData: (pokemonId: number) =>
    queryOptions({
      queryKey: ['pokemonDetail', pokemonId],
      queryFn: () => fetchPokemonDetailData(pokemonId),
      enabled: pokemonId > 0,
    }),

  getSpeciesData: (pokemonId: number) =>
    queryOptions({
      queryKey: ['speciesData', pokemonId],
      queryFn: () => fetchSpeciesData(pokemonId),
      enabled: !!pokemonId,
    }),

  getEvolutionData: (evolutionUrl: string) =>
    queryOptions({
      queryKey: ['evolutionData', evolutionUrl],
      queryFn: () => fetchEvolutionData(evolutionUrl),
      enabled: !!evolutionUrl,
    })
}