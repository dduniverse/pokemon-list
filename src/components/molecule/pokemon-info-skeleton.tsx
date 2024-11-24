import { Skeleton } from "@/components/atom";

export default function PokemonInfoSkeleton() {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Height & Weight */}
      <div className="flex flex-row gap-2">
        <div className="flex flex-col items-center font-bold pb-2.5 p-2 px-5 gap-2 bg-white rounded-lg">
          <Skeleton width="60px" height="16px" /> {/* Label */}
          <Skeleton width="40px" height="16px" /> {/* Value */}
        </div>
        <div className="flex flex-col items-center font-bold pb-2.5 p-2 px-5 gap-2 bg-white rounded-lg">
          <Skeleton width="60px" height="16px" /> {/* Label */}
          <Skeleton width="40px" height="16px" /> {/* Value */}
        </div>
      </div>

      {/* Types */}
      <div className="flex flex-row gap-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <Skeleton
            key={index}
            width="50px"
            height="24px"
            className="rounded-full"
          />
        ))}
      </div>
    </div>
  );
}