import React from 'react';
import {useRouter} from 'next/router';
import {TypeLabel} from '@/components/atom';

interface DetailTemplateProps {
  pokemon: any;
}

export default function DetailTemplate(props: DetailTemplateProps) {
  const {pokemon} = props;
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto p-4">
      <button onClick={handleBack} className="mb-4 text-blue-500 hover:underline">
        &larr; Back
      </button>

      <h1 className="text-2xl font-bold mb-4 capitalize">{pokemon.name}</h1>

      <img src={pokemon.imageUrl} alt={pokemon.name} className="mx-auto h-48" />

      <div className="text-lg">
        <p>Height: {pokemon?.height / 10} m</p>
        <p>Weight: {pokemon?.weight / 10} kg</p>
      </div>

      <div className="flex flex-wrap">
        {pokemon?.types.map((type: string, index: number) => (
          <TypeLabel key={index} type={type} />
        ))}
      </div>
    </div>
  );
}
