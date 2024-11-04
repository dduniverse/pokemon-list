import React from 'react';
import Link from 'next/link';
import {TypeLabel} from '@/components/atom';

interface CardProps {
  name: string;
  number: number;
  height: number;
  weight: number;
  types: string[];
  imageUrl: string | null; // Allow imageUrl to be null
}

export default function Card(props: CardProps) {
  const {name, number, height, weight, types, imageUrl} = props;

  return (
    <Link
      href={`/pokemon/${number}`}
      className={`
        flex 
        bg-white 
        rounded-lg 
        shadow-md 
        overflow-hidden 
        transition-transform 
        duration-200 
        ease-in-out 
        transform 
        hover:scale-105 
        hover:bg-blue-50       
        border-transparent 
        relative  
        mx-1
        mb-2 
        ${!imageUrl ? 'pb-3' : ''}
      `}
    >
      <div className="flex flex-col w-full p-2">
        {/* Header with number and name */}
        <div className="flex flex-col items-start">
          <div className="text-gray-600 text-md font-semibold"># {number}</div>
          <div className="text-gray-600 text-md font-bold capitalize break-words">{name}</div>
        </div>

        <div className="flex">
          <div className="w-3/5 overflow-hidden">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-30 object-cover" // Set fixed height and cover to prevent overflow
              />
            ) : (
              <div className="flex items-center mt-4 justify-center w-full h-full bg-gray-50 text-gray-500 rounded-lg">
                <span className="mb-4">No image</span>
              </div>
            )}
          </div>

          <div className="w-2/5 pl-3 pr-1 pt-1 flex flex-col justify-start">
            <div className="text-base font-medium text-gray-700 mb-1">
              {(height / 10).toFixed(1)}m
            </div>
            <div className="text-base font-medium text-gray-700 mb-1">
              {(weight / 10).toFixed(1)}kg
            </div>
            <div className="space-y-1.5">
              {types.map((type, index) => (
                <TypeLabel key={index} type={type} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}