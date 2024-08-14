import { useEffect, useRef, useState } from 'react';

import { useCharacterContext } from '../../context/CharacterContext';

import { GalleryList } from './GalleryList';

import { Pagination, Search, Select } from '../ui';

import { Character } from '../../models/Character';

export const GalleryContainer = () => {
  const { characters, isLoading, isError } = useCharacterContext();
  const [gallerySize, setGallerySize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState<Character[] | null>(null);
  const startIndex = (currentPage - 1) * gallerySize;
  const endIndex = startIndex + gallerySize;
  const totalPages = useRef(0);

  useEffect(() => {
    if (!characters) return;

    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    const paginatedCharacters = filteredCharacters.slice(startIndex, endIndex);
    totalPages.current = Math.ceil(filteredCharacters.length / gallerySize);

    setFilteredCharacters(paginatedCharacters);
  }, [characters, searchQuery, startIndex, endIndex, gallerySize]);

  if (isError) {
    return (
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-red-500">
        Failed to load characters.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Select setGallerySize={setGallerySize} gallerySize={gallerySize} />
      </div>

      <GalleryList
        isLoading={isLoading}
        characters={filteredCharacters}
        gallerySize={gallerySize}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages.current}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
