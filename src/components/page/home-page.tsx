import { useState } from "react";
import { HomeTemplate } from "@/components/template";
import usePokemonList from "@/hooks/usePokemonList";
import { processingData } from "@/utils/processingData";
import { DEFAULT_REGION, DEFAULT_SORT, ITEMS_PER_PAGE, TOTAL_ITEMS_ALL } from "@/types/constants";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState(DEFAULT_REGION);
  const [sortType, setSortType] = useState(DEFAULT_SORT);
  const [page, setPage] = useState(1);

  // 데이터 호출
  const { data: pokemonList, isPending } = usePokemonList({ region, page });

  // 데이터 처리
  const processedData = processingData(pokemonList, searchQuery, region, sortType, page, ITEMS_PER_PAGE);

  // 핸들러
  const handleRegionChange = (newRegion: string) => {
    setRegion(newRegion);
    setPage(1); // 지역 변경 시 페이지 초기화
    setSortType(DEFAULT_SORT);
  };

  const handleSortChange = (newSortType: string) => {
    setSortType(newSortType);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <HomeTemplate
      pokemonData={processedData}
      isPending={isPending}
      region={region}
      sortType={sortType}
      page={page}
      totalItems={region === DEFAULT_REGION ? TOTAL_ITEMS_ALL : pokemonList?.length || 0}
      handlers={{
        onRegionChange: handleRegionChange,
        onSortChange: handleSortChange,
        onPageChange: handlePageChange,
        onSearchChange: handleSearchChange,
      }}
    />
  );
}