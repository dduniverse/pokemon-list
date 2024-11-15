function Search() {
  return (
    <div className="w-full flex flex-row justify-between items-center p-2 gap-2">
      <input
        type="text"
        placeholder="포켓몬 이름을 입력해주세요."
        className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-600 placeholder-gray-600 placeholder-opacity-50"
      />
      <button className="px-4 py-2 bg-amber-500 text-white font-semibold rounded hover:bg-amber-600 transition duration-200">
        Search
      </button>
    </div>
  );
}

export default Search;