import { Header, PokemonImage, Skeleton } from "@/components/atom";
import { PokemonInfo, PokemonInfoSkeleton, EvolutionListSkeleton } from "@/components/molecule";
import { PokemonNav, EvolutionList, PokemonNavSkeleton } from "@/components/organism";
import { PokemonDetailType } from "@/services/pokemon/type";
import { GroupedEvolution } from "@/types/types";

interface DetailTemplateProps {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  prevPokemon: PokemonDetailType;
  nextPokemon: PokemonDetailType;
  evolutions: GroupedEvolution[];
  isPending: boolean;
}

export default function DetailTemplate({ id, name, height, weight, types, prevPokemon, nextPokemon, evolutions, isPending }: DetailTemplateProps) {
  return (
    <>
      <Header />
      {isPending ? (
        <>
          <PokemonNavSkeleton />
          <div className="flex justify-center items-center bg-gray-200 gap-8 rounded-md p-2 mx-4">
            <Skeleton width="128px" height="128px" className="rounded-full" /> {/* 포켓몬 이미지 */}
            <PokemonInfoSkeleton />
          </div>
          <EvolutionListSkeleton />
        </>
      ) : (
        <>
          <PokemonNav id={id} name={name} prevPokemon={prevPokemon} nextPokemon={nextPokemon} />
          <div className="flex justify-center items-center bg-gray-200 gap-8 rounded-md p-2 mx-4">
            <PokemonImage id={id} name={name} />
            <PokemonInfo height={height} weight={weight} types={types} />
          </div>
          <EvolutionList evolutions={evolutions} />
        </>
      )}
    </>
  );
}