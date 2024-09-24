import { render } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  test('renders', () => {
    const { getByText, getByTestId, getAllByTestId } = render(<App />);

    expect(getByText('Welcome to Animal Facts!')).toBeInTheDocument();
    expect(getByText('My Favorite Animal:')).toBeInTheDocument();
    expect(getByTestId('factsList')).toBeInTheDocument();
    expect(getAllByTestId('factCard')).toHaveLength(12);
  });
});
