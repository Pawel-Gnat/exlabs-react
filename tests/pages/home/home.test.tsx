import { HomePage } from '@/pages';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Home Page', () => {
  it('should render heading', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'Rick & Morty Gallery',
    });

    expect(heading).toBeInTheDocument();
  });
});
