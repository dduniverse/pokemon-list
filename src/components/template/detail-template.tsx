import {PokemonInfo, EvoluationChain} from '@/components/organism';
import {Footer, Header, LoadingSpinner} from '@/components/atom';
import {IEvolutionChain} from '@/types/evolution-chain';
import {IPokemon} from '@/types/pokemon';

interface DetailTemplateProps {
  pokemon: IPokemon;
  explanation: string;
  evolutionChain: IEvolutionChain;
  isPendingPokemonDetail: boolean;
}

export default function DetailTemplate(props: DetailTemplateProps) {
  const {pokemon, explanation, evolutionChain, isPendingPokemonDetail} = props;

  return (
    <div data-testid="detail-template" className="mx-auto flex flex-col h-screen">
      <Header />

      {isPendingPokemonDetail ? (
        <LoadingSpinner />
      ) : (
        <div data-testid="pokemon-basic-info" className="p-6 overflow-auto h-full">
          <div className="overflow-auto max-w-7xl mx-auto">
            <PokemonInfo {...{pokemon, explanation, evolutionChain}} />

            {evolutionChain && <EvoluationChain {...{evolutionChain}} />}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
