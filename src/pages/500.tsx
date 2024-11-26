import { Header } from "@/components/atom";

export default function Custom500() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1 flex-col justify-center items-center">
        <img src="/pokemon-ball-opened.png" width={50} height={50}></img>
        <h1 className="text-6xl font-bold text-amber-500 my-4">500</h1>
        <h2 className="text-2xl font-semibold mb-2">Server error occurred</h2>
        <p className="text-gray-600 mb-6">서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-2 bg-amber-500 text-white font-semibold rounded-md hover:bg-amber-600 transition-all"
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}