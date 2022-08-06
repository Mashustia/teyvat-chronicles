import {render, waitFor, screen} from '@testing-library/react';
import Header from './index';
import {I18SuspenseWrapper} from '../../utils/testUtils';

describe('Header', () => {
  test('renders Header component', async () => {
    render(
      <I18SuspenseWrapper>
        <Header/>
      </I18SuspenseWrapper>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    await waitFor(() => expect(screen.getByText(/welcome/i)).toBeInTheDocument())
  })
});
