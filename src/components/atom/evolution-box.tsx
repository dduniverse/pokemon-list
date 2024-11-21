import { GroupedEvolution } from "@/types/types";
import PokemonImage from "./pokemon-image";
import Link from "next/link";

interface EvolutionBoxProps {
  pokemon: GroupedEvolution;
}
export default function EvolutionBox({ pokemon }: EvolutionBoxProps) {
  return (
    <Link href={`/${pokemon.id}`}>
      <div
        className="flex justify-center items-center w-72 rounded-lg p-4 gap-1 transition-transform duration-300 ease-in-out
                  transform hover:scale-105 shadow-sm hover:shadow-lg bg-gray-100 cursor-pointer overflow-hidden"
      >
        <PokemonImage id={pokemon.id} name={pokemon.name} />
        <p className="font-bold text-lg">{pokemon.name}</p>
      </div>
    </Link>
  )
}