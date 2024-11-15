import SelectRegions from "../atom/SelectRegions";
import SortOptions from "../atom/SortOptions";

function FilterAndSort() {
  return (
    <div className="w-full flex flex-row justify-between items-center gap-2 p-2">
      <SelectRegions />
      <SortOptions />
    </div>
  )
}

export default FilterAndSort;