import { Header } from "@/components/atom";

export default function Custom404() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1 flex-col justify-center items-center">
        <img src="/pokemon-ball-opened.png" width={50} height={50}></img>
        <h1 className="text-6xl font-bold text-amber-500 my-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">페이지를 찾을 수 없어요. 주소를 다시 확인해주세요.</p>
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