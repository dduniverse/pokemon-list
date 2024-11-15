import { pokemonService } from "@/services/pokemon/query"
import { getIdFromUrl } from "@/utils/getIdFromUrl";
import { useQueries, useQuery } from "@tanstack/react-query";

interface usePokemonListProps {
  itemsPerPage: number;
  region?: string;
}

function usePokemonList({ itemsPerPage, region }: usePokemonListProps) {
  const {data: pokemonListData, isPending: pokemonListPending} = useQuery(pokemonService.getPokemonData(itemsPerPage, region));

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
  const detailQueries =
    pokemonList.map((pokemon) => {
      return pokemonService.getPokemonDetailData(getIdFromUrl(pokemon.url));
    }) || [];

  const pokemonDetail = useQueries({ queries: detailQueries });

  const mergedData = pokemonList.map((pokemon, index) => {
    const detail = pokemonDetail[index]?.data || {};
    return {
      id: detail.id,
      name: pokemon.name,
      url: pokemon.url,
      weight: detail.weight,
      height: detail.height,
      types: detail.types?.map((typeInfo) => typeInfo.type.name) || [], // 타입 리스트
    };
  });

  const isPending = pokemonListPending || pokemonDetail.some((query) => query.isLoading);

  return {
    data: mergedData,
    isPending,
  };
}

export default usePokemonList;