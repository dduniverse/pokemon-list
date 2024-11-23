import Link from "next/link";
import { GroupedEvolution } from "@/types/types";
import { PokemonImage } from "@/components/atom";
import { useDetailPrefetch } from "@/hooks/use-detail-prefetch";

interface EvolutionBoxProps {
  pokemon: GroupedEvolution;
}
export default function EvolutionBox({ pokemon }: EvolutionBoxProps) {

  const prefetchPokemonData = useDetailPrefetch();

  const handleHover = () => {
    prefetchPokemonData(pokemon.id);
  }

  return (
    <Link href={`/${pokemon.id}`}>
      <div
        className="flex justify-center items-center w-72 rounded-lg p-4 gap-1 transition-transform duration-300 ease-in-out
                  transform hover:scale-105 shadow-sm hover:shadow-lg bg-gray-100 cursor-pointer overflow-hidden"
        onMouseEnter={handleHover}
      >
        <PokemonImage id={pokemon.id} name={pokemon.name} />
        <p className="font-bold text-lg">{pokemon.name}</p>
      </div>
    </Link>
  )
}