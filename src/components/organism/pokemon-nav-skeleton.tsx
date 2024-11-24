import { Skeleton } from "@/components/atom";

export default function PokemonNavSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between mt-5 mb-5 p-4">
      {/* 왼쪽 버튼 */}
      <div className="flex items-center">
        <Skeleton width="80px" height="40px" className="rounded-lg" />
      </div>

      {/* 중앙 텍스트 */}
      <Skeleton width="200px" height="24px" className="rounded" />

      {/* 오른쪽 버튼 */}
      <div className="flex items-center">
        <Skeleton width="80px" height="40px" className="rounded-lg" />
      </div>
    </div>
  );
}