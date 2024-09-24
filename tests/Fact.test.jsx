import { render } from '@testing-library/react';
import { Fact } from '../src/Fact';
import { animalFacts } from '../src/data';
import { expect } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

describe('Fact', () => {
  test('renders', () => {
    const { getByText, getByRole } = render(<Fact fact={animalFacts[0]} />);

    expect(getByText('Elephant')).toBeInTheDocument();
    expect(getByText('Baby Elephants suck their trunks for comfort.')).toBeInTheDocument();
    expect(getByRole('img', { name: 'Baby Elephant' })).toBeVisible();
    expect(getByRole('button', { name: 'Click to favorite' })).toBeInTheDocument();
  });

  test('handles favorite button click', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(<Fact fact={animalFacts[0]} handleClick={handleClick} />);
    const faveBtn = getByRole('button', { name: 'Click to favorite' });

    fireEvent.click(faveBtn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
