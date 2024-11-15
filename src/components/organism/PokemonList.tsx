import PokemonCard from "../molecule/PokemonCard";

function PokemonList({ pokemonData }) {
  return (
    <div className="grid gap-4 p-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {pokemonData.map((data) => (
        <PokemonCard key={data.id} id={data.id} name={data.name} types={data.types} />
      ))}
    </div>
  );
}

export default PokemonList;