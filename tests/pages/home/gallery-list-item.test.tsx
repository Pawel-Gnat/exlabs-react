import { GalleryListItem } from '@/components/homepage/GalleryListItem';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { mockedCharacters } from '../../mocks/mocks';

describe('Gallery list item component', () => {
  it('should navigate to the character detail page when clicked', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <GalleryListItem character={mockedCharacters[0]} />
      </MemoryRouter>,
    );

    const linkElement = screen.getByRole('link', { name: /Rick Sanchez/i });

    await user.click(linkElement);

    waitFor(() => {
      expect(screen.getByText(/Human/)).toBeInTheDocument();
    });
  });
});
