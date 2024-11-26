import { PokemonData } from "@/types/types";
import { sortData } from "./sort-data";

export function processingData(
  data: PokemonData[], 
  searchQuery: string,
  region: string,
  sortType: string,
  page: number,
  itemsPerPage: number
) {
  if (!data) return {count: 0, currentPageData: []};

  // 검색어로 데이터 필터링
  let filteredData = data;
  if (searchQuery) {
    filteredData = filteredData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // 정렬 처리
  let sortedData = sortData(filteredData, sortType);

  let currentPageData = []
  // 페이지네이션 처리
  if (region !== "All") {
    currentPageData = sortedData.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  } else {
    currentPageData = sortedData
  }

  return {
    count: sortedData.length, // 전체 데이터 개수
    currentPageData,     // 현재 페이지 데이터
  };
}