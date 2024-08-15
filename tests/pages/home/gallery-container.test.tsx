import { GalleryContainer } from '@/components/homepage/GalleryContainer';
import { useCharacterContext } from '@/context/CharacterContext';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, Mock, vi } from 'vitest';

import { mockedCharacters } from '../../mocks/mocks';

vi.mock('@/context/CharacterContext', () => ({
  useCharacterContext: vi.fn(),
}));

describe('Gallery container component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render gallery size select component', () => {
    (useCharacterContext as Mock).mockReturnValue({
      characters: mockedCharacters,
      isError: false,
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <GalleryContainer />
      </MemoryRouter>,
    );

    const gallerySizeSelect = screen.getByRole('combobox', {
      name: 'Gallery size:',
    });

    expect(gallerySizeSelect).toBeInTheDocument();
  });

  it('should render search input component', () => {
    (useCharacterContext as Mock).mockReturnValue({
      characters: mockedCharacters,
      isError: false,
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <GalleryContainer />
      </MemoryRouter>,
    );

    const searchInput = screen.getByRole('textbox', {
      name: 'Search by name',
    });

    expect(searchInput).toBeInTheDocument();
  });

  it('should render error message when there is an fetching error', () => {
    (useCharacterContext as Mock).mockReturnValue({
      characters: null,
      isError: true,
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <GalleryContainer />
      </MemoryRouter>,
    );

    expect(screen.getByText('Failed to load characters.')).toBeInTheDocument();
  });

  it('should render info message when characters are not fetched', () => {
    (useCharacterContext as Mock).mockReturnValue({
      characters: [],
      isError: false,
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <GalleryContainer />
      </MemoryRouter>,
    );

    expect(screen.getByText('No characters found.')).toBeInTheDocument();
  });

  it('should render fetched characters ', () => {
    (useCharacterContext as Mock).mockReturnValue({
      characters: mockedCharacters,
      isError: false,
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <GalleryContainer />
      </MemoryRouter>,
    );

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(10);
  });

  it('should filter characters based on search query', async () => {
    (useCharacterContext as Mock).mockReturnValue({
      characters: mockedCharacters,
      isError: false,
      isLoading: false,
    });

    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <GalleryContainer />
      </MemoryRouter>,
    );

    const searchInput = screen.getByRole('textbox', {
      name: 'Search by name',
    });

    await user.type(searchInput, 'Rick');

    await waitFor(() => {
      expect(screen.getAllByText(/Rick/i)).toHaveLength(2);
    });
  });

  it('should display empty message when filter non existing character based on search query', async () => {
    (useCharacterContext as Mock).mockReturnValue({
      characters: mockedCharacters,
      isError: false,
      isLoading: false,
    });

    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <GalleryContainer />
      </MemoryRouter>,
    );

    const searchInput = screen.getByRole('textbox', {
      name: 'Search by name',
    });

    await user.type(searchInput, 'Ricky');

    await waitFor(() => {
      expect(screen.getByText('No characters found.')).toBeInTheDocument();
    });
  });

  it('changes gallery size when select input is changed', async () => {
    (useCharacterContext as Mock).mockReturnValue({
      characters: mockedCharacters,
      isError: false,
      isLoading: false,
    });

    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <GalleryContainer />
      </MemoryRouter>,
    );

    const gallerySizeSelect = screen.getByRole('combobox', {
      name: 'Gallery size:',
    });

    user.selectOptions(gallerySizeSelect, '6');

    await waitFor(() => {
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(6);
    });
  });

  it('navigates between pages using pagination', async () => {
    (useCharacterContext as Mock).mockReturnValue({
      characters: mockedCharacters,
      isError: false,
      isLoading: false,
    });

    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <GalleryContainer />
      </MemoryRouter>,
    );

    const gallerySizeSelect = screen.getByRole('combobox', {
      name: 'Gallery size:',
    });

    await user.selectOptions(gallerySizeSelect, '6');

    const secondPaginationButton = screen.getByRole('button', { name: 'Page 2' });

    await user.click(secondPaginationButton);

    await waitFor(() => {
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(4);
    });
  });
});
