function SelectRegion({ onChange }) {
  
  const handleRegionChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      <label
        className="block text-sm font-medium text-gray-700 mb-2"
        id="regions-label"
      >
        Regions
      </label>
      <div
        className="flex flex-wrap gap-2"
        role="radiogroup"
        aria-labelledby="regions-label"
      >
        {["All", "Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Paldea"].map((region) => (
          <label key={region} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="regions"
              value={region}
              className="hidden peer"
              onChange={handleRegionChange}
              defaultChecked={region === "All"} // 기본값 설정
            />
            <span
              className="px-4 py-2 rounded-md text-sm bg-gray-200 text-gray-700 peer-checked:bg-amber-500 peer-checked:text-white transition-colors duration-200"
            >
              {region}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default SelectRegion;