import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Searchbar from './Searchbar';

describe.skip('Searchbar', () => {
  const mockProps = {
    handleInputChange: jest.fn(),
    handleSearchClick: jest.fn(),
    handleEnter: jest.fn(),
    cityName: 'test',
  };

  test('renders Searchbar component', () => {
    render(<Searchbar />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('handleInputChange is called right amount of times', () => {
    render(<Searchbar />);

    const input = screen.getByRole('textbox');

    userEvent.type(input, 'test');

    expect(mockProps.handleInputChange).toHaveBeenCalledTimes(4);
  });

  test('handleSearchClick is called when button is pressed', () => {
    render(<Searchbar />);
    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(mockProps.handleSearchClick).toHaveBeenCalledTimes(1);
  });

  test('handleSearchClick is called when enter is pressed', () => {
    render(<Searchbar />);
    const input = screen.getByRole('textbox');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(mockProps.handleEnter).toHaveBeenCalledTimes(1);
  });
});
