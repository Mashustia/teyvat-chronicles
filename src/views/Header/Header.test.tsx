import {render, waitFor} from '@testing-library/react';
import Header from './index';
import {I18SuspenseWrapper} from '../../utils/testUtils';

describe('Header', () => {
  test('renders Header component', async () => {
    const {getByText} = render(
      <I18SuspenseWrapper>
        <Header/>
      </I18SuspenseWrapper>
    )

    expect(getByText(/loading.../i)).toBeInTheDocument()

    await waitFor(() => expect(getByText(/welcome/i)).toBeInTheDocument())
  })
});
