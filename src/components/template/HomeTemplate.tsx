import { Header, Search, SelectRegion, SortOptions, Pagination } from "@/components/atom";
import { PokemonList } from "@/components/organism";

interface HomeTemplateProps {
  pokemonData: any[];
  isPending: boolean;
  region: string;
  page: number;
  totalItems: number;
  handlers: {
    onRegionChange: (region: string) => void;
    onSortChange: (sortType: string) => void;
    onPageChange: (page: number) => void;
    onSearchChange: (query: string) => void;
  };
}

export default function HomeTemplate({ pokemonData, isPending, region, page, totalItems, handlers }: HomeTemplateProps) {
  return (
    <>
      <Header />
      <Search onChange={(e) => handlers.onSearchChange(e.target.value)} />
      <div className="w-full flex flex-row justify-between items-center p-2 gap-2">
        <SelectRegion onChange={handlers.onRegionChange} />
        <SortOptions onChange={handlers.onSortChange} />
      </div>
      {isPending ? (
        <div className="flex justify-center items-center h-full">
          <img src="/pokeball.gif" alt="Loading..." />
        </div>
      ) : (
        <>
          <PokemonList pokemonData={pokemonData} />
          <Pagination
            currentPage={page}
            onPageChange={handlers.onPageChange}
            totalItems={totalItems}
          />
        </>
      )}
    </>
  );
}