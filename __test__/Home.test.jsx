import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from '../src/app/page';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Home />);

    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
  });
});
