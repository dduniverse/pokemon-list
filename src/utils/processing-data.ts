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
  if (!data) return [];

  // 검색어로 데이터 필터링
  let filteredData = data;
  if (searchQuery) {
    filteredData = filteredData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // 정렬 처리
  let sortedData = sortData(filteredData, sortType);

  // 페이지네이션 처리
  if (region !== "All") {
    sortedData = sortedData.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  }

  return sortedData;
}