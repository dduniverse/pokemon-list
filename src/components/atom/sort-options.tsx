interface SortOptionsProps {
  value: string;
  onChange: (sortType: string) => void; // string 값을 전달
}

export default function SortOptions({ value, onChange }: SortOptionsProps) {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value); // 부모로 선택된 정렬 옵션 전달
  };

  return (
    <div>
      <label htmlFor="sort-options" className="block font-medium text-gray-700 mb-2">Sort</label>
      <select
        id="sort-options"
        className="rounded-md border p-2 focus:outline-none hover:ring-1 hover:ring-amber-500 focus:ring-amber-500"
        onChange={handleSortChange}
        value={value}
      >
        <option value="Lowest Number">Lowest Number</option>
        <option value="Highest Number">Highest Number</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  );
}