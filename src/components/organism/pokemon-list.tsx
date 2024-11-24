import { PokemonCard } from "@/components/molecule";
import { PokemonData } from "@/types/types";

interface PokemonListProps {
  pokemonData: PokemonData[]
}

export default function PokemonList({ pokemonData }: PokemonListProps) {
  return (
    <div className="grid gap-4 p-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {pokemonData.map((data) => (
        <PokemonCard key={data.name} id={data.id} name={data.name} types={data.types} />
      ))}
    </div>
  );
}