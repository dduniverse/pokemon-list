import Link from "next/link";
import { PokemonImage } from "@/components/atom";
import { useDetailPrefetch } from "@/hooks/use-detail-prefetch";

interface NavigationButtonProps {
  disabled: boolean; 
  id: number; 
  name: string | null; 
}

export default function NavButton({ disabled, id, name }: NavigationButtonProps) {

  const prefetchPokemonData = useDetailPrefetch();

  const handleHover = () => {
    prefetchPokemonData(id);
  }

  return (
    <Link href={`/${id}`}>
      <button
        disabled={disabled}
        className={`flex items-center justify-center gap-1 px-3 py-1 font-bold text-white rounded-md transition-colors
          ${disabled ? "bg-gray-300 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"}
        `}
        onMouseEnter={handleHover}
      >
        <PokemonImage id={id} name={name} width={40} height={40} />
        {name ? `No. ${id}` : "No Pokemon"}
      </button>
    </Link>
  )
}