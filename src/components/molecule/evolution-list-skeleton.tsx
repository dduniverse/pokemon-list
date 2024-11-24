import { Skeleton } from "@/components/atom";

export default function EvolutionListSkeleton() {
  return (
    <div className="mb-4 p-4">
      {/* 제목 */}
      <Skeleton width="150px" height="24px" className="mb-4" />

      {/* EvolutionTree */}
      <div className="flex justify-center gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex items-center gap-2">
            {/* 진화 단계 */}
            <Skeleton width="64px" height="64px" className="rounded-full" /> {/* 포켓몬 이미지 */}
            <Skeleton width="100px" height="16px" className="rounded" /> {/* 포켓몬 이름 */}
          </div>
        ))}
      </div>
    </div>
  );
}