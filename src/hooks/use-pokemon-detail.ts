import { pokemonDetailService } from "@/services/detail/query";
import { useQuery } from "@tanstack/react-query";

interface usePokemonDetailProps {
  pokemonID: number;
}

export default function usePokemonDetail({ pokemonID }: usePokemonDetailProps) {
  // console.log(pokemonID-1, pokemonID+1);

  // 포켓몬 상세 데이터 가져오기
  const { data: pokemonData, error: pokemonError, isPending: isPokemonPending } = useQuery(pokemonDetailService.getPokemonDetailData(pokemonID));
  
  // 종 데이터 가져오기
  const { data: speciesResponse, error: speciesError, isPending: isSpeciesPending } = useQuery(pokemonDetailService.getSpeciesData(pokemonID));
  
  // 진화 데이터 가져오기
  const { data: evolutionChain, error: evolutionError, isPending: isEvolutionPending } = useQuery(pokemonDetailService.getEvolutionData(speciesResponse?.evolution_chain?.url ?? ''));

  // 이전 포켓몬 데이터 가져오기
  const { data: prevPokemonData } = useQuery(pokemonDetailService.getPokemonDetailData(pokemonID - 1));

  // 다음 포켓몬 데이터 가져오기
  const { data: nextPokemonData } = useQuery(pokemonDetailService.getPokemonDetailData(pokemonID + 1));

  const isPending = isPokemonPending || isSpeciesPending || isEvolutionPending;
  const isError = pokemonError || speciesError || evolutionError;

  return {
    data: {
      id: pokemonData?.id,
      name: pokemonData?.name,
      weight: pokemonData?.weight,
      height: pokemonData?.height,
      types: pokemonData?.types?.map((typeInfo) => typeInfo.type.name) || [],
      evolutions: evolutionChain,
      prevPokemon: prevPokemonData,
      nextPokemon: nextPokemonData,
    },
    isPending,
    isError,
  };
}