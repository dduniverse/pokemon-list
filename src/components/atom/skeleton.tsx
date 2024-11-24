interface SkeletonProps {
  width: string; // 너비
  height: string; // 높이
  className?: string; // 추가 클래스
}

export default function Skeleton({ width, height, className = "rounded-md" }: SkeletonProps) {
  return (
    <div
      className={`bg-gray-300 animate-pulse ${className}`}
      style={{
        width,
        height,
      }}
    ></div>
  );
}