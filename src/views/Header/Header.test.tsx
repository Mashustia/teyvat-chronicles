import {render, waitFor, screen} from '@testing-library/react';
import SuspenseAndTranslationWrapper from '../Layout/SuspenseAndTranslationWrapperForTests';
import Header from './index';

describe('Header', () => {
  test('renders Header component', async () => {
    render(
      <SuspenseAndTranslationWrapper>
        <Header/>
      </SuspenseAndTranslationWrapper>
    )

    await waitFor(() => expect(screen.getByText(/welcome/i)).toBeInTheDocument())
  })
});
