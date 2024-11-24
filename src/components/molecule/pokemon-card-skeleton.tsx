import { Skeleton } from "@/components/atom";

export default function PokemonCardSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg p-2 bg-gray-100 shadow-md animate-pulse">
      {/* 번호 */}
      <Skeleton width="64px" height="16px" className="mb-2 rounded-md" />

      {/* 이미지 */}
      <Skeleton width="128px" height="128px" className="my-2 rounded-full" /> 

      {/* 이름 */}
      <Skeleton width="96px" height="18px" className="mb-2 rounded-md" />

      {/* 타입 */}
      <div className="flex flex-wrap justify-center gap-1 mt-2">
        <Skeleton width="48px" height="13px" className="mr-1 rounded-md" /> 
        <Skeleton width="48px" height="13px" /> 
      </div>
    </div>
  );
}