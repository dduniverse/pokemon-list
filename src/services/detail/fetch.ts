import { getData } from "../get-data";
import { EvolutionChainSchema, SpeciesDataSchema } from "./type";

// species 데이터 요청
export const fetchSpeciesData = async (pokemonId: number) => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
  const data = await getData(url);
  return SpeciesDataSchema.parse(data);
};

// 진화 데이터 요청
export const fetchEvolutionData = async (evolutionUrl: string) => {
  if (!evolutionUrl) return null;
  const data = await getData(evolutionUrl);
  return EvolutionChainSchema.parse(data.chain);
};