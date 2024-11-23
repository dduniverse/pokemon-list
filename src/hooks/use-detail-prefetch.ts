import { useRef } from 'react';
import { csrClient } from '@/services/react-query';
import { pokemonDetailService } from '@/services/detail/query';

export const useDetailPrefetch = () => {
  const prefetchedIds = useRef(new Set<number>()); // 중복 프리패칭을 방지하기 위해 set으로 관리

  return (id: number) => {
    // 아직 프리패칭 되지 않은 id에 대해서만 queryClient.prefetchQuery 호출
    if (!prefetchedIds.current.has(id)) {
      prefetchedIds.current.add(id);
      csrClient.prefetchQuery(pokemonDetailService.getPokemonDetailData(id));
      csrClient.prefetchQuery(pokemonDetailService.getSpeciesData(id));
      csrClient.prefetchQuery(pokemonDetailService.getPokemonDetailData(id - 1)); // 이전 포켓몬
      csrClient.prefetchQuery(pokemonDetailService.getPokemonDetailData(id + 1)); // 다음 포켓몬
    }
  };
};