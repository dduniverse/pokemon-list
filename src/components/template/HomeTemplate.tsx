import { useState } from "react";
import usePokemonList from "@/hooks/usePokemonList";
import Header from "../atom/Header";
import Search from "../atom/Search";
import SelectRegion from "../atom/SelectRegion";
import SortOptions from "../atom/SortOptions";
import PokemonList from "../organism/PokemonList";
import { sortData } from "@/utils/sortData";

function HomeTemplate() {
  const [region, setRegion] = useState("All");
  const [sortType, setSortType] = useState("Lowest Number"); // 기본 정렬 값 설정

  const { data: pokemonList, isPending } = usePokemonList({
    itemsPerPage: 20,
    region: region,
  });

  const sortedData = sortData(pokemonList, sortType); 

  return (
    <>
      <Header />
      <Search />
      <div className="w-full flex flex-row justify-between items-center p-2 gap-2">
        <SelectRegion onChange={setRegion} />
        <SortOptions onChange={setSortType} />
      </div>
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <PokemonList pokemonData={sortedData} />
      )}
    </>
  );
}

export default HomeTemplate;