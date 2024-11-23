import { ITEMS_PER_PAGE, REGION_URLS } from "@/types/constants";
import { getData } from "../get-data";
import { CombinedPokemonDataSchema, PokemonDetailSchema } from "./type";

export const fetchPokemonData = async (region: string, offset: number) => {
  const url = region === 'All' ? `https://pokeapi.co/api/v2/pokemon?offset=${offset}limit=${ITEMS_PER_PAGE}` : REGION_URLS[region];
  const response = await getData(url);
  return CombinedPokemonDataSchema.parse(response); 
};

export const fetchPokemonDetailData = async (pokemonId: number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const response = await getData(url);
  return PokemonDetailSchema.parse(response);
};