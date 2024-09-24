import { render } from '@testing-library/react';
import { animalFacts } from '../src/data';
import { expect } from 'vitest';
import { FactsList } from '../src/FactsList';

describe('FactsList', () => {
  test('renders', () => {
    const { getAllByTestId, getByTestId } = render(<FactsList facts={animalFacts} />);

    expect(getByTestId('factsList')).toBeInTheDocument();
    expect(getAllByTestId('factCard')).toHaveLength(12);
  });
});
