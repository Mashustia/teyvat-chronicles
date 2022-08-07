import {render, screen} from '@testing-library/react';
import App from './App';
import {renderWithI18} from './utils/testUtils';


describe('App', () => {
  test('renders App component', () => {
    render(renderWithI18(<App/>))

    expect(screen.getByTestId('app')).toBeInTheDocument()
  })
});

