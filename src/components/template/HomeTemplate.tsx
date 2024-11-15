import Header from "../atom/Header";
import Search from "../atom/Search";
import FilterAndSort from "../molecule/FilterAndSort";
import PokemonList from "../organism/PokemonList";

function HomeTemplate() {
  const mockPokemonData = [
    { id: 25, name: "Pikachu", types: ["electric"], weight: 60, height: 4 },
    { id: 1, name: "Bulbasaur", types: ["grass", "poison"], weight: 69, height: 7 },
    { id: 4, name: "Charmander", types: ["fire"], weight: 85, height: 6 },
    { id: 7, name: "Squirtle", types: ["water"], weight: 90, height: 5 },
    { id: 39, name: "Jigglypuff", types: ["normal", "fairy"], weight: 55, height: 5 },
    { id: 94, name: "Gengar", types: ["ghost", "poison"], weight: 405, height: 15 },
  ];

  return (
    <>
      <Header />
      <Search />
      <FilterAndSort />
      <PokemonList pokemonData={mockPokemonData} />
    </>
  );
}

export default HomeTemplate;