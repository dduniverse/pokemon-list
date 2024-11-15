import { useState } from "react";
import usePokemonList from "@/hooks/usePokemonList";
import Header from "../atom/Header";
import Search from "../atom/Search";
import SelectRegion from "../atom/SelectRegion";
import SortOptions from "../atom/SortOptions";
import PokemonList from "../organism/PokemonList";
import Pagination from "../atom/Pagination";
import { processingData } from "@/utils/processingData";
import { DEFAULT_REGION, DEFAULT_SORT, ITEMS_PER_PAGE, TOTAL_ITEMS_ALL } from "@/types/constants";

function HomeTemplate() {
  const [region, setRegion] = useState(DEFAULT_REGION);
  const [sortType, setSortType] = useState(DEFAULT_SORT);
  const [page, setPage] = useState(1);

  const { data: pokemonList, isPending } = usePokemonList({
    region,
    page,
  });

  // 데이터 정렬 및 페이지네이션 처리
  const processedData = processingData(pokemonList, region, sortType, page, ITEMS_PER_PAGE);

  // 상태 변경 핸들러
  const handleRegionChange = (newRegion: string) => {
    setRegion(newRegion);
    setPage(1); // 지역 변경 시 페이지 초기화
  };

  const handleSortChange = (newSortType: string) => {
    setSortType(newSortType);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <Header />
      <Search />
      <div className="w-full flex flex-row justify-between items-center p-2 gap-2">
        <SelectRegion onChange={handleRegionChange} />
        <SortOptions onChange={handleSortChange} />
      </div>
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <>
          <PokemonList pokemonData={processedData} />
          <Pagination
            currentPage={page}
            onPageChange={handlePageChange}
            totalItems={region === DEFAULT_REGION ? TOTAL_ITEMS_ALL : pokemonList?.length || 0}
          />
        </>
      )}
    </>
  );
}

export default HomeTemplate;