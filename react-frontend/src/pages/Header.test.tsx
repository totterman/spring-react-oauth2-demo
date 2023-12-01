import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

test('should render logo', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  expect(screen.getByAltText('Logo')).toBeInTheDocument();
});

test('should not render lorem ipsum', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  expect(screen.queryByText('Lorem ipsum ...')).not.toBeInTheDocument();
});

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));
