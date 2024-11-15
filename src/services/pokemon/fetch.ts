import { regionUrls } from "@/types/constants";
import { getData } from "../getData";
import { CombinedPokemonDataSchema, PokemonDetailSchema } from "./type";

export const fetchPokemonData = async (itemsPerPage: number, region: string) => {
  const url = region === 'All' ? `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}` : regionUrls[region];
  const response = await getData(url);
  return CombinedPokemonDataSchema.parse(response); 
};

export const fetchPokemonDetailData = async (pokemonId: number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const response = await getData(url);
  return PokemonDetailSchema.parse(response);
};