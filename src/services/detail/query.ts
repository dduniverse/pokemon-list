import { queryOptions } from "@tanstack/react-query";
import { fetchPokemonDetailData } from "../pokemon/fetch";
import { fetchEvolutionData, fetchSpeciesData } from "./fetch";

export const pokemonDetailService = {
  getPokemonDetailData: (pokemonId: number) =>
    queryOptions({
      queryKey: ['pokemonDetail', pokemonId],
      queryFn: () => fetchPokemonDetailData(pokemonId),
      enabled: pokemonId > 0 && pokemonId < 10276,
    }),

  getSpeciesData: (speciesUrl: string) =>
    queryOptions({
      queryKey: ['speciesData', speciesUrl],
      queryFn: () => fetchSpeciesData(speciesUrl),
      enabled: !!speciesUrl,
    }),

  getEvolutionData: (evolutionUrl: string) =>
    queryOptions({
      queryKey: ['evolutionData', evolutionUrl],
      queryFn: () => fetchEvolutionData(evolutionUrl),
      enabled: !!evolutionUrl,
    })
}