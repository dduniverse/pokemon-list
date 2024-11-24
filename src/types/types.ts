export interface GroupedEvolution {
  name: string;
  id: number;
  children?: GroupedEvolution[]; 
}

export interface PokemonData {
  id?: number;
  name?: string;
  url?: string;
  weight?: number;
  height?: number;
  types: string[];
}