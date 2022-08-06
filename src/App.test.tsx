import {render, screen} from '@testing-library/react';
import App from './App';
import {I18wrapper} from './utils/testUtils';


describe('App', () => {
  test('renders App component', () => {
    render(
      <I18wrapper>
        <App/>
      </I18wrapper>
    )

    expect(screen.getByTestId('app')).toBeInTheDocument()
  })
});

