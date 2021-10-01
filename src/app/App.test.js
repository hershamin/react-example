import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';
import { increment } from '../stores/example';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

const setupMocks = () => {
  useSelector.mockImplementation((selector) => selector({
    example: {
      clicks: 2,
      getRequest: {
        userAgent: 'User Agent',
      },
    },
  }));
  //useDispatch.mockReturnValue(jest.fn());
};


describe('App', () => {

  test('renders click counts', () => {
    setupMocks();
    render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );
    const clickCountElement = screen.getByText('2 clicks');
    expect(clickCountElement).toBeInTheDocument();
  });

  test('renders user agent', () => {
    setupMocks();
    render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );
    const userAgent = screen.getByText('User Agent: User Agent');
    expect(userAgent).toBeInTheDocument();
  });

  test('simulate click', () => {
    setupMocks();
    render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );
    const clickElement = screen.getByText('Click');
    clickElement.click();
    expect(mockDispatch).toHaveBeenCalledWith(increment());
  });

});
