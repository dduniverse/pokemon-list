import PokemonImage from "../atom/PokemonImage";
import TypeChip from "../atom/TypeChip";


function PokemonCard({ id, name, types }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg p-2 bg-gray-100 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
      <span className={"font-bold text-xs md:text-base"}>No. {id}</span>
      <PokemonImage id={id} name={name} />
      <span className="text-sm md:text-lg font-bold pb-2">{name}</span>
      <div className="flex flex-wrap justify-center gap-1">
        {types.map((type) => (
          <TypeChip key={type} type={type} />
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;