import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Pagestyle from './Pagestyle';

test('should render correct page items when data specified', () => {
  render(
    <BrowserRouter>
      <Pagestyle header="headline" children="Lorem ipsum ..." />
    </BrowserRouter>,
  );
  expect(screen.getByText('headline')).toBeInTheDocument();
  expect(screen.getByText('Lorem ipsum ...')).toBeInTheDocument();
});
