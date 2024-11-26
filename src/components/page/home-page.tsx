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
  const { count, currentPageData} = processingData(pokemonList, searchQuery, selectedRegion, selectedSortType, currentPage, ITEMS_PER_PAGE);

  const totalItems = searchQuery
  ? count // 검색된 결과 개수
  : selectedRegion === DEFAULT_REGION
  ? TOTAL_ITEMS_ALL // 기본 전체 개수
  : count || 0; // 지역 필터 적용 시 개수

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
    setCurrentPage(1); 
  };

  return (
    <HomeTemplate
      pokemonData={currentPageData}
      isPending={isPending}
      region={selectedRegion}
      sortType={selectedSortType}
      page={currentPage}
      totalItems={totalItems}
      handlers={{
        onRegionChange: handleRegionChange,
        onSortChange: handleSortChange,
        onPageChange: handlePageChange,
        onSearchChange: handleSearchChange,
      }}
    />
  );
}