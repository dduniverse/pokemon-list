import { DEFAULT_REGION, DEFAULT_SORT } from '@/types/constants';
import { create } from 'zustand';

interface usePageStore {
  currentPage: number,
  selectedSortType: string,
  selectedRegion: string,
  setCurrentPage: (page: number) => void;
  setSelectedSortType: (sortType: string) => void;
  setSelectedRegion: (region: string) => void;
}

export const usePageStore = create<usePageStore>((set) => ({
  currentPage: 1,
  selectedSortType: DEFAULT_SORT,
  selectedRegion: DEFAULT_REGION,
  setCurrentPage: (page: number) => set({ currentPage: page }),
  setSelectedSortType: (sortType: string) => set({ selectedSortType: sortType }),
  setSelectedRegion: (region: string) => set({ selectedRegion: region }),
}));