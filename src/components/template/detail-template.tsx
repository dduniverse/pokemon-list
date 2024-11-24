import { Header, PokemonImage } from "@/components/atom";
import { PokemonInfo } from "@/components/molecule";
import { PokemonNav, EvolutionList } from "@/components/organism";
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
}

export default function DetailTemplate({ id, name, height, weight, types, prevPokemon, nextPokemon, evolutions }: DetailTemplateProps) {
  return (
    <>
      <Header />
      <PokemonNav id={id} name={name} prevPokemon={prevPokemon} nextPokemon={nextPokemon} />
      <div className="flex justify-center items-center bg-gray-200 gap-8 rounded-md p-2 mx-4">
        <PokemonImage id={id} name={name} />
        <PokemonInfo height={height} weight={weight} types={types} />
      </div>
      <EvolutionList evolutions={evolutions} />
    </>
  )
}