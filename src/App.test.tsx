import {render} from '@testing-library/react';
import App from './App';
import {I18wrapper} from './utils/testUtils';


describe('App', () => {
  test('renders App component', () => {
    const {getByTestId} = render(
      <I18wrapper>
        <App/>
      </I18wrapper>
    )

    expect(getByTestId('app')).toBeInTheDocument()
  })
});

