import StatBox from "../atom/stat-box";
import TypeChip from "../atom/type-chip";

interface PokemonInfoProps {
  height: number;
  weight: number;
  types: string[];
}

export default function PokemonInfo({ height, weight, types }: PokemonInfoProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-row gap-2">
        <StatBox label="Height" value={`${height / 10}m`} />
        <StatBox label="Weight" value={`${weight / 10}kg`} />
      </div>
      <div className="flex flex-row gap-2">
        {types.map((type) => (
          <TypeChip key={type} type={type} /> 
        ))}
      </div>
    </div>
  )
}