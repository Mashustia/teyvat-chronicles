import {render, waitFor, screen} from '@testing-library/react';
import CharacterInformation from './index';
import {renderWithI18AndSuspenseAndRouter} from '../../../../utils/testUtils';

describe('CharacterInformation', () => {
  test('renders 404 page when wrong person is in route', async () => {
    const badRoute = '/wrongCharacterName'

    render(renderWithI18AndSuspenseAndRouter(<CharacterInformation/>, ':name', [badRoute]))

    await waitFor(() => expect(screen.getByText(/page_404/i)).toBeInTheDocument())
  })
  test('renders CharacterInformation when route is correct', async () => {
    const goodRoute = '/Jean'

    render(renderWithI18AndSuspenseAndRouter(<CharacterInformation/>, ':name', [goodRoute]))

    const pageHeader = await screen.findByRole('heading', {level: 1})

    expect(pageHeader).toHaveTextContent(/names.Jean/i)
  })
});
