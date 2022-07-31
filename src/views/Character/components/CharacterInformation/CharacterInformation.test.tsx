import {MemoryRouter, Route, Routes} from 'react-router-dom';
import {render, screen, waitFor} from '@testing-library/react';
import CharacterInformation from './index';
import SuspenseAndTranslationWrapper from '../../../Layout/SuspenseAndTranslationWrapperForTests';

describe('CharacterInformation', () => {
  test('renders 404 page when wrong person is in route', async () => {
    const badRoute = '/wrongCharacterName'

    render(
      <SuspenseAndTranslationWrapper>
        <MemoryRouter initialEntries={[badRoute]}>
          <Routes>
            <Route path=':name' element={<CharacterInformation/>}/>
          </Routes>
        </MemoryRouter>
      </SuspenseAndTranslationWrapper>
    )

    await waitFor(() => expect(screen.getByText(/page_404/i)).toBeInTheDocument())
  })
  test('renders CharacterInformation when route is correct', async () => {
    const goodRoute = '/Jean'

    render(
      <SuspenseAndTranslationWrapper>
        <MemoryRouter initialEntries={[goodRoute]}>
          <Routes>
            <Route path=':name' element={<CharacterInformation/>}/>
          </Routes>
        </MemoryRouter>
      </SuspenseAndTranslationWrapper>
    )

    await waitFor(() => {
      const elementsWithTranslation = screen.getAllByText(/names.jean/i)
      expect(elementsWithTranslation[0]).toBeInTheDocument()
    })
  })
});
