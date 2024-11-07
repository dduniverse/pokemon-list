import {IPokemon} from '@/interface/pokemon';
import {create} from 'zustand';

interface FinderStore {
  sortOption: string;
  searchList: string[];
  singleSearch: string;
  filteredPokemonList: IPokemon[];

  setSortOption: (param: string) => void;
  setSearchList: (param: string[]) => void;
  setSingleSearch: (param: string) => void;
  setFilteredPokemonList: (param: IPokemon[]) => void;
}

export const useFinderStore = create<FinderStore>((set) => ({
  sortOption: 'asc', // 'asc' 또는 'desc'
  searchList: [],
  singleSearch: '',
  filteredPokemonList: [],

  setSortOption: (param) => set({sortOption: param}),
  setSearchList: (param) => set({searchList: param}),
  setSingleSearch: (param) => set({singleSearch: param}),
  setFilteredPokemonList: (param) => set({filteredPokemonList: param}),
}));
