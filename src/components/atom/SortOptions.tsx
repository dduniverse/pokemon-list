function SortOptions() {
  return (
    <div className="w-56">
      <label
        htmlFor="sort-option"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Sort Options
      </label>
      <select
        id="sort-option"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
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