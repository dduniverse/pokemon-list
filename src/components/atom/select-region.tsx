interface SelectRegionProps {
  onChange: (region: string) => void; // string 값을 전달
}

export default function SelectRegion({ onChange }: SelectRegionProps) {
  const handleRegionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value); // 선택된 지역 값을 상위로 전달
  };

  return (
    <div className="w-full">
      <label
        className="block font-medium text-gray-700 mb-2"
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