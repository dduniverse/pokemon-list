import { sortData } from "./sortData";

export function processingData(
  pokemonList: any[], 
  region: string,
  sortType: string,
  page: number,
  itemsPerPage: number
) {
  if (!pokemonList) return [];

  // 정렬 처리
  let sortedData = sortData(pokemonList, sortType);

  // 페이지네이션 처리
  if (region !== "All") {
    sortedData = sortedData.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  }

  return sortedData;
}