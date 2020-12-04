import { render, screen } from '@testing-library/react';
import App from '../containers/App';

test('renders app container with header component', () => {
  render(<App />);
  const linkElement = screen.getByText('AutoLoan App Challenge');
  expect(linkElement).toBeInTheDocument();
});
