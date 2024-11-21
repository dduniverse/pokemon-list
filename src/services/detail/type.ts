import { z, ZodSchema } from "zod";

// species.chain 데이터
export const SpeciesDataSchema = z.object({
  id: z.number(),
  name: z.string(),
  evolution_chain: z.object({
    url: z.string().url(),
  })
});

// pokemon evolution 데이터
export const EvolutionChainSchema: ZodSchema = 
  z.lazy(() =>
    z.object({
      is_baby: z.boolean().optional().default(false),
      species: z
        .object({
          name: z.string(),
          url: z.string(),
        })
        .optional(),
      evolution_details: z.any(), // 상세한 검증 없이 유연하게 처리
      evolves_to: z
        .array(z.lazy(() => EvolutionChainSchema))
        .optional()
        .default([]), // 기본값 빈 배열 설정
    })
  )
  .optional()
  .default({}); // 최상위 객체의 기본값을 빈 객체로 설정

