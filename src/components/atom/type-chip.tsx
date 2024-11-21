import { TYPE_CLASS_MAP } from "@/types/constants";

interface TypeChipProps {
  type: string;
}

export default function TypeChip({ type }: TypeChipProps) {
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${TYPE_CLASS_MAP[type]}`}>
      {type}
    </span>
  );
}