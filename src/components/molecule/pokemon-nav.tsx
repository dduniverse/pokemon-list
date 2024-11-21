import NavButton from "../atom/nav-button";

export default function PokemonNav({ id, name, prevPokemon, nextPokemon }) {
  return (
    <div className="flex flex-row items-center justify-between mt-5 mb-5 p-4">
      <NavButton
        disabled={!prevPokemon} // prevPokemon이 없으면 비활성화
        id={prevPokemon?.id ?? 0} // prevPokemon.id가 없으면 0 전달
        name={prevPokemon?.name ?? ""}
      />
      <p className="text-3xl font-bold">
        {name} No. {id}
      </p>
      <NavButton
        disabled={!nextPokemon} // nextPokemon이 없으면 비활성화
        id={nextPokemon?.id ?? 0} // nextPokemon.id가 없으면 0 전달
        name={nextPokemon?.name ?? ""}
      />
    </div>
  );
}