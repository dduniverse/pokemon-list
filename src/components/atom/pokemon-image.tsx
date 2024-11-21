interface PokemonImageProps {
  id: number;
  name: string;
  width?: number;
  height?: number;
}

export default function PokemonImage({ id, name, width = 128, height = 128 }: PokemonImageProps) {
  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      alt={name}
      className="rounded-full"
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
}