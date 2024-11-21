import { pokemonService } from "@/services/pokemon/query"
import { ITEMS_PER_PAGE } from "@/types/constants";
import { getIdFromUrl } from "@/utils/get-id-from-url";
import { useQueries, useQuery } from "@tanstack/react-query";

interface usePokemonListProps {
  region?: string;
  page: number;
}

function usePokemonList({ region, page }: usePokemonListProps) {
  const offset = (page - 1) * ITEMS_PER_PAGE;

  // 포켓몬 리스트 데이터 요청
  const {data: pokemonListData, isPending: pokemonListPending} = useQuery(pokemonService.getPokemonData(region, offset));

  let pokemonList: { name?: string; url?: string }[] = [];
  if (pokemonListData) {
    if ("results" in pokemonListData) {
      // PokemonListSchema 구조
      pokemonList = pokemonListData.results;
    } else if ("pokemon_entries" in pokemonListData) {
      // RegionDataSchema 구조
      pokemonList = pokemonListData.pokemon_entries.map((entry) => ({
        name: entry.pokemon_species.name,
        url: entry.pokemon_species.url,
      }));
    }
  }

  // detail 데이터 요청
  const detailQueries =
    pokemonList.map((pokemon) => {
      return pokemonService.getPokemonDetailData(getIdFromUrl(pokemon.url));
    }) || [];

  const pokemonDetail = useQueries({ queries: detailQueries });

  // 리턴 데이터 형식
  const mergedData = pokemonList.map((pokemon, index) => {
    const detail = pokemonDetail[index]?.data || {};
    return {
      id: detail.id,
      name: pokemon.name,
      url: pokemon.url,
      weight: detail.weight,
      height: detail.height,
      types: detail.types?.map((typeInfo) => typeInfo.type.name) || [],
    };
  });

  const isPending = pokemonListPending || pokemonDetail.some((query) => query.isLoading);

  return {
    data: mergedData,
    isPending,
  };
}

export default usePokemonList;