import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MenuButton from './MenuButton';

test('should render menu button when not loading', () => {
  render(
    <BrowserRouter>
      <MenuButton
        callback={() => {
          return { foo: 'bar' };
        }}
        loading={false}
        children="Lorem ipsum ..."
      />
    </BrowserRouter>,
  );
  expect(screen.getByText('Lorem ipsum ...')).toBeInTheDocument();
});

test('should not render menu button when loading', () => {
  render(
    <BrowserRouter>
      <MenuButton
        callback={() => {
          return { foo: 'bar' };
        }}
        loading={true}
        children="Lorem ipsum ..."
      />
    </BrowserRouter>,
  );
  expect(screen.queryByText('Lorem ipsum ...')).not.toBeInTheDocument();
});
