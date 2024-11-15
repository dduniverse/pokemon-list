export const DEFAULT_REGION = "All";
export const DEFAULT_SORT = "Lowest Number";
export const TOTAL_ITEMS_ALL = 1302; // 전체 포켓몬 개수 (All 기준)
export const ITEMS_PER_PAGE = 20;

// type별 color
export const TYPE_CLASS_MAP: { [key: string]: string } = {
  normal: "bg-yellow-300 text-gray-700",
  fire: "bg-red-500 text-white",
  water: "bg-blue-500 text-white",
  electric: "bg-yellow-400 text-gray-800",
  grass: "bg-green-500 text-white",
  ice: "bg-blue-200 text-gray-700",
  fighting: "bg-red-700 text-white",
  poison: "bg-purple-500 text-white",
  ground: "bg-yellow-600 text-white",
  flying: "bg-blue-300 text-gray-700",
  psychic: "bg-pink-500 text-white",
  bug: "bg-green-300 text-gray-700",
  rock: "bg-yellow-700 text-white",
  ghost: "bg-purple-700 text-white",
  dragon: "bg-indigo-600 text-white",
  dark: "bg-gray-800 text-white",
  steel: "bg-gray-500 text-white",
  fairy: "bg-pink-300 text-gray-700",
};

// region별 pokedex url
export const REGION_URLS: { [key: string]: string } = {
  Kanto: 'https://pokeapi.co/api/v2/pokedex/kanto',
  Johto: 'https://pokeapi.co/api/v2/pokedex/updated-johto',
  Hoenn: 'https://pokeapi.co/api/v2/pokedex/updated-hoenn',
  Sinnoh: 'https://pokeapi.co/api/v2/pokedex/original-sinnoh',
  Unova: 'https://pokeapi.co/api/v2/pokedex/updated-unova',
  Kalos: 'https://pokeapi.co/api/v2/pokedex/kalos-central',
  Alola: 'https://pokeapi.co/api/v2/pokedex/updated-alola',
  Galar: 'https://pokeapi.co/api/v2/pokedex/galar',
  Paldea: 'https://pokeapi.co/api/v2/pokedex/paldea'
};