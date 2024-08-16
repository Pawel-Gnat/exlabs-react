import { useCharacterById } from '@/hooks/useCharacterById';
import { CharacterPage } from '@/pages';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useNavigate, useParams } from 'react-router-dom';
import { describe, expect, it, Mock, vi } from 'vitest';

import { mockedCharacters } from '../../mocks/mocks';

vi.mock('react-router-dom', async (importOriginal) => {
  const originalModule = await importOriginal();
  return {
    ...(originalModule as object),
    useNavigate: vi.fn(),
    useParams: vi.fn(),
  };
});

vi.mock('@/hooks/useCharacterById');

describe('Character Page', () => {
  it('should render character details', () => {
    (useParams as Mock).mockReturnValue({
      id: '1',
    });

    (useCharacterById as Mock).mockReturnValue({
      character: mockedCharacters[0],
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <CharacterPage />
      </MemoryRouter>,
    );

    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'Rick Sanchez',
    });
    const speciesText = screen.getByText(/Human/);
    const genderText = screen.getByText(/Male/);
    const originText = screen.getByText(/Earth \(C-137\)/);
    const locationText = screen.getByText(/Citadel of Ricks/);
    const characterImage = screen.getByRole('img', {
      name: 'Rick Sanchez',
    });

    expect(heading).toBeInTheDocument();
    expect(speciesText).toBeInTheDocument();
    expect(genderText).toBeInTheDocument();
    expect(originText).toBeInTheDocument();
    expect(locationText).toBeInTheDocument();
    expect(characterImage).toBeInTheDocument();
  });

  it('should navigate back to the gallery when "Back to Gallery" link is clicked', async () => {
    (useParams as Mock).mockReturnValue({
      id: '1',
    });

    (useCharacterById as Mock).mockReturnValue({
      character: mockedCharacters[0],
      isLoading: false,
    });

    const mockNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockNavigate);

    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <CharacterPage />
      </MemoryRouter>,
    );

    const backButton = screen.getByRole('link', { name: 'Back to Gallery' });

    await user.click(backButton);

    waitFor(() => {
      expect(screen.getByText('Rick & Morty Gallery')).toBeInTheDocument();
    });
  });

  it('should navigate to "Not Found" page if character is not found', async () => {
    (useParams as Mock).mockReturnValue({
      id: '100',
    });

    (useCharacterById as Mock).mockReturnValue({
      character: null,
      isLoading: false,
    });

    const mockNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <CharacterPage />
      </MemoryRouter>,
    );

    waitFor(() => {
      expect(screen.getByText('Page not found')).toBeInTheDocument();
    });
  });
});
