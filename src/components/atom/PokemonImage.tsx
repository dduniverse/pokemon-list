function PokemonImage({ id, name }) {
  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      alt={name}
      className="w-32 h-32"
    />
  )
}

export default PokemonImage;