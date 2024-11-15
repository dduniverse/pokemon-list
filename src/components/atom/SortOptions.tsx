function SortOptions({ onChange }) {
  const handleSortChange = (e) => {
    onChange(e.target.value); // 부모로 선택된 정렬 옵션 전달
  };

  return (
    <div>
      <label htmlFor="sort-options" className="block font-medium text-gray-700 mb-2">Sort</label>
      <select
        id="sort-options"
        className="rounded-md border p-2 focus:outline-none hover:ring-1 hover:ring-amber-500 focus:ring-amber-500"
        onChange={handleSortChange}
        defaultValue="Lowest Number" // 기본값 설정
      >
        <option value="Lowest Number">Lowest Number</option>
        <option value="Highest Number">Highest Number</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  );
}

export default SortOptions;