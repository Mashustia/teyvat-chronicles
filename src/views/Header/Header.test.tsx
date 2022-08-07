import {render, screen} from '@testing-library/react';
import Header from './index';
import {renderWithI18AndSuspense} from '../../utils/testUtils';

describe('Header', () => {
  render(renderWithI18AndSuspense(<Header/>))
  test('renders Header component', async () => {

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    const greetingsText = await screen.findByRole('heading', {level: 1})
    expect(greetingsText).toHaveTextContent(/welcome/i)
  })
});
