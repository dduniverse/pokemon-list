import { GroupedEvolution } from "@/types/types";
import { EvolutionTree } from "@/components/molecule";

interface EvolutionListProps {
  evolutions: GroupedEvolution[];
}

export default function EvolutionList({ evolutions }: EvolutionListProps) {
  return (
    <div className="mb-4 p-4">
      <h5 className="text-xl font-bold mb-4">Evolutions</h5>
      <div className="flex flex-col justify-center">
        {evolutions.map((evolution) => (
          <EvolutionTree key={evolution.id} evolution={evolution} />
        ))}
      </div>
    </div>
  )
}
