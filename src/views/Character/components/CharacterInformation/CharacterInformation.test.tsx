import {render, screen, waitFor} from '@testing-library/react';
import CharacterInformation from './index';
import {I18SuspenseRouterWrapper} from '../../../../utils/testUtils';

describe('CharacterInformation', () => {
  test('renders 404 page when wrong person is in route', async () => {
    const badRoute = '/wrongCharacterName'

    render(
      <I18SuspenseRouterWrapper
        initialEntries={[badRoute]}
        path=':name'
        children={<CharacterInformation/>}
      />
    )

    await waitFor(() => expect(screen.getByText(/page_404/i)).toBeInTheDocument())
  })
  test('renders CharacterInformation when route is correct', async () => {
    const goodRoute = '/Jean'

    render(
      <I18SuspenseRouterWrapper
        initialEntries={[goodRoute]}
        path=':name'
        children={<CharacterInformation/>}
      />
    )

    await waitFor(() => {
      const elementsWithTranslation = screen.getAllByText(/names.jean/i)
      expect(elementsWithTranslation[0]).toBeInTheDocument()
    })
  })
});
