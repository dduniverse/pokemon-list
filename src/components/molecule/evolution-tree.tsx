import { GroupedEvolution } from "@/types/types";
import { EvolutionBox } from "@/components/atom";

interface EvolutionTreeProps {
  evolution: GroupedEvolution;
}

export default function EvolutionTree({ evolution }: EvolutionTreeProps) {
  const { id, children } = evolution;
  const childrenLength = children?.length ?? 0;

  return (
    <div className="flex flex-row justify-center items-center gap-12">
      {id !== null && <EvolutionBox pokemon={evolution} />}
      
      {childrenLength > 0 && '➡️'}
      
      {children?.length ? (
        <div className="flex flex-col space-y-12">
          {children.map((child) => (
            <EvolutionTree key={child.id} evolution={child} />
          ))}
        </div>
      ) : null}
    </div>
  )
}