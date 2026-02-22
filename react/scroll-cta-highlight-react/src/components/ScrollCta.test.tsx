import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import ScrollCta from './ScrollCta';

describe('ScrollCta', () => {
  it('renders with default props', () => {
    render(<ScrollCta />);
    expect(screen.getByLabelText('Sign Up')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<ScrollCta onClick={handleClick} />);
    fireEvent.click(screen.getByLabelText('Sign Up'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});