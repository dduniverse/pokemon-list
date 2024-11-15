import { typeClassMap } from "@/types/constants";

function TypeChip({ type }) {
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeClassMap[type]}`}>
      {type}
    </span>
  );
}

export default TypeChip;