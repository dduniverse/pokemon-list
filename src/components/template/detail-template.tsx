import { Header, PokemonImage } from "@/components/atom";
import { PokemonInfo } from "@/components/molecule";
import { PokemonNav, EvolutionList } from "@/components/organism";

export default function DetailTemplate({ id, name, height, weight, types, prevPokemon, nextPokemon, evolutions }) {
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