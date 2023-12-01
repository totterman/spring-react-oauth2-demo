import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Warningstyle from './Warningstyle';

test('should render correct page items item when data specified', () => {
  render(
    <BrowserRouter>
      <Warningstyle children="Lorem ipsum ..." />
    </BrowserRouter>,
  );
  expect(screen.getByText('Lorem ipsum ...')).toBeInTheDocument();
});
