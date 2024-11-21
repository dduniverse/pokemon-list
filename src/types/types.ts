export interface GroupedEvolution {
  name: string;
  id: number;
  children?: GroupedEvolution[]; 
}