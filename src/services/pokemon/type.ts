import { z, ZodSchema } from "zod";

const ResultSchema = z.object({
  name: z.string(),
  url: z.string(),
})

const TypeSchema = z.object({
  slot: z.number(),
  type: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

const AbilitiesSchema = z.object({
  ability: z.object({
    name: z.string(),
    url: z.string(),
  }),
  is_hidden: z.boolean(),
  slot: z.number(),
});

const StatSchema = z.object({
    base_stat: z.number(),
    effort: z.number(),
    stat: z.object({
      name: z.string(),
      url: z.string(),
    })
});

// 포켓몬 ALL 데이터
export const PokemonListSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(ResultSchema),
});

// 개별 포켓몬 상세 정보 데이터
export const PokemonDetailSchema = z.object({
  id: z.number(),
  name: z.string(),
  height: z.number(),
  weight: z.number(),
  base_experience: z.number().nullable().optional(),
  types: z.array(TypeSchema),
  stats: z.array(StatSchema),
  abilities: z.array(AbilitiesSchema),
  species: z.object({
    name: z.string(),
    url: z.string(),
  }), 
});

const LanguageSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

const DescriptionSchema = z.object({
  description: z.string(),
  language: LanguageSchema,
});

const NameSchema = z.object({
  language: LanguageSchema,
  name: z.string(),
});

const PokemonSpeciesSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

const PokemonEntrySchema = z.object({
  entry_number: z.number(),
  pokemon_species: PokemonSpeciesSchema,
});

const RegionSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

const VersionGroupSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

// 지역별 데이터
export const RegionDataSchema = z.object({
  descriptions: z.array(DescriptionSchema),
  id: z.number(),
  is_main_series: z.boolean(),
  name: z.string(),
  names: z.array(NameSchema),
  pokemon_entries: z.array(PokemonEntrySchema),
  region: RegionSchema,
  version_groups: z.array(VersionGroupSchema),
});

export const CombinedPokemonDataSchema = z.union([PokemonListSchema, RegionDataSchema]);