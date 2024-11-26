import { useState } from "react";
import { HomeTemplate } from "@/components/template";
import usePokemonList from "@/hooks/use-pokemon-list";
import { processingData } from "@/utils/processing-data";
import { DEFAULT_REGION, DEFAULT_SORT, ITEMS_PER_PAGE, TOTAL_ITEMS_ALL } from "@/types/constants";
import { usePageStore } from "@/store/use-page-store";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const { 
    currentPage, 
    selectedSortType, 
    selectedRegion,
    setCurrentPage,
    setSelectedSortType,
    setSelectedRegion,
   } = usePageStore();

  // 데이터 호출
  const { data: pokemonList, isPending } = usePokemonList({ region: selectedRegion, page: currentPage });

  // 데이터 처리
  const processedData = processingData(pokemonList, searchQuery, selectedRegion, selectedSortType, currentPage, ITEMS_PER_PAGE);

  // 핸들러
  const handleRegionChange = (newRegion: string) => {
    setSelectedRegion(newRegion);
    setCurrentPage(1); // 지역 변경 시 페이지 초기화
    setSelectedSortType(DEFAULT_SORT);
  };

  const handleSortChange = (newSortType: string) => {
    setSelectedSortType(newSortType);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <HomeTemplate
      pokemonData={processedData}
      isPending={isPending}
      region={selectedRegion}
      sortType={selectedSortType}
      page={currentPage}
      totalItems={selectedRegion === DEFAULT_REGION ? TOTAL_ITEMS_ALL : pokemonList?.length || 0}
      handlers={{
        onRegionChange: handleRegionChange,
        onSortChange: handleSortChange,
        onPageChange: handlePageChange,
        onSearchChange: handleSearchChange,
      }}
    />
  );
}