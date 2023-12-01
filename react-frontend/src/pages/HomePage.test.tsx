import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from './HomePage';

test('should render some frontpage text', () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>,
  );
  expect(screen.getByText('list1')).toBeInTheDocument();
});

test('should not render lorem ipsum', () => {
  render(
    <BrowserRouter>
      <HomePage />
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
