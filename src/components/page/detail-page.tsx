import { DetailTemplate } from "@/components/template";
import { GroupedEvolution } from "@/types/types";
import { extractEvolutionData } from "@/utils/extract-evolution-data";
import usePokemonDetail from "@/hooks/use-pokemon-detail";

interface DetailPageProps {
  id: string | string[];
}

export default function DetailPage({id}: DetailPageProps) {
  // console.log(id);
  const { data: pokemonDetail, isPending, isError } = usePokemonDetail({ pokemonID: Number(id) });
  console.log(pokemonDetail);

  const evolutions: GroupedEvolution[] = pokemonDetail ? extractEvolutionData(pokemonDetail.evolutions) : [];

  return (
    <DetailTemplate 
      id={pokemonDetail.id}
      name={pokemonDetail.name}
      height={pokemonDetail.height}
      weight={pokemonDetail.weight}
      types={pokemonDetail.types}
      prevPokemon={pokemonDetail.prevPokemon}
      nextPokemon ={pokemonDetail.nextPokemon}
      evolutions={evolutions}
    />
  );
}