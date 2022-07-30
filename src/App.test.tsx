import {render, screen} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18nTestingConfig';
import App from './App';


describe('App', () => {
  test('renders App component', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App/>
      </I18nextProvider>
    )

    expect(screen.getByTestId('app')).toBeInTheDocument()
  })
});

