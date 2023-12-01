import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem';
import { BrowserRouter } from 'react-router-dom';

test('should render correct menu item when data specified', () => {
  render(
    <BrowserRouter>
      <MenuItem to="" children="Lorem ipsum ..." />
    </BrowserRouter>,
  );
  expect(screen.getByText('Lorem ipsum ...')).toBeInTheDocument();
});
