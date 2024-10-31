import axios from "axios";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { REACT_QUERY_OPTION, POKEMON_API_V2 } from "@/utils/constants";

// 포켓몬 상세 정보에 대한 Zod 스키마 정의
const PokemonDetailSchema = z.object({
  name: z.string(),
  id: z.number(),
  height: z.number(),
  weight: z.number(),
  types: z.array(
    z.object({
      type: z.object({ name: z.string() }),
    })
  ),
  sprites: z.object({
    front_default: z.string().url().nullable(),
  }),
});

// Zod 스키마로부터 TypeScript 인터페이스 정의
type TPokemonDetailType = z.infer<typeof PokemonDetailSchema>;

// 포켓몬 상세 정보를 가져오는 훅 정의
export const usePokemonDetail = (id: string | undefined) => {
  return useQuery<TPokemonDetailType>(
    ["pokemonDetail", id],
    async () => {
      const response = await axios.get(`${POKEMON_API_V2}/pokemon/${id}`);

      return PokemonDetailSchema.parse(response.data);
    },
    {
      // id가 정의된 경우에만 쿼리를 실행
      enabled: !!id,
      // 선택 사항: 창이 다시 포커스를 얻을 때 데이터를 새로 고침하지 않음
      refetchOnWindowFocus: false,
      staleTime: REACT_QUERY_OPTION.staleTime,
      cacheTime: REACT_QUERY_OPTION.cacheTime,
    }
  );
};
