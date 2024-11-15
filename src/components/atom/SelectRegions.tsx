function SelectRegion() {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2" id="regions-label">
        Regions
      </label>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-labelledby="regions-label">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="regions"
            className="hidden peer"
          />
          <span
            className="px-4 py-2 rounded-md text-sm bg-gray-200 text-gray-700 peer-checked:bg-amber-500 peer-checked:text-white transition-colors duration-200"
          >
            region1
          </span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="regions"
            className="hidden peer"
          />
          <span
            className="px-4 py-2 rounded-md text-sm bg-gray-200 text-gray-700 peer-checked:bg-amber-500 peer-checked:text-white transition-colors duration-200"
          >
            region2
          </span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="regions"
            className="hidden peer"
          />
          <span
            className="px-4 py-2 rounded-md text-sm bg-gray-200 text-gray-700 peer-checked:bg-amber-500 peer-checked:text-white transition-colors duration-200"
          >
            region3
          </span>
        </label>
      </div>
    </div>
  );
}

export default SelectRegion;