import {
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {I18SuspenseRouterWrapper} from '../../../../utils/testUtils';
import {RouteName, Vision} from '../../../../const/consts';
import Characters from './index';

const MOCK_CHARACTERS = [{
  name: 'Albedo',
  vision: Vision.GEO,
  ascension_materials: {},
  rarity: 5,
  talent_materials: {},
  possible_teams: [],
  attack: {},
  elemental_skill: {},
  elemental_burst: {},
  search_keys: 'albedo альбедо geo гео',
  translated_name: 'Albedo'
}, {
  name: 'Jean',
  vision: Vision.ANEMO,
  ascension_materials: {},
  rarity: 5,
  talent_materials: {},
  possible_teams: [],
  attack: {},
  elemental_skill: {},
  elemental_burst: {},
  search_keys: 'jean джинн anemo анемо',
  translated_name: 'Jean'
}]

describe('Characters', () => {
  test('renders Characters component', async () => {
    render(
      <I18SuspenseRouterWrapper
        initialEntries={[RouteName.DEFAULT]}
        path={RouteName.DEFAULT}
      >
        <Characters characters={MOCK_CHARACTERS}/>
      </I18SuspenseRouterWrapper>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    await waitFor(() => expect(screen.getByPlaceholderText(/search_placeholder/i)).toBeInTheDocument())
  })

  test('character search works', async () => {
    const {findAllByRole} = render(
      <I18SuspenseRouterWrapper
        initialEntries={[RouteName.DEFAULT]}
        path={RouteName.DEFAULT}
      >
        <Characters characters={MOCK_CHARACTERS}/>
      </I18SuspenseRouterWrapper>
    )

    const charactersBeforeSearch = await findAllByRole('link')
    expect(charactersBeforeSearch).toHaveLength(2)
    expect(charactersBeforeSearch[0]).toHaveAttribute('href', '/Jean')
    expect(charactersBeforeSearch[1]).toHaveAttribute('href', '/Albedo')

    await waitFor(() => userEvent.type(screen.getByPlaceholderText(/search_placeholder/i), 'Albedo'))

    const charactersAfterSearch = await findAllByRole('link')
    expect(charactersAfterSearch).toHaveLength(1)
    expect(charactersAfterSearch[0]).toHaveAttribute('href', '/Albedo')
  })

  test('onChange function works in search', async () => {
    render(
      <I18SuspenseRouterWrapper
        initialEntries={[RouteName.DEFAULT]}
        path={RouteName.DEFAULT}
      >
        <Characters characters={MOCK_CHARACTERS}/>
      </I18SuspenseRouterWrapper>
    )

    const searchField = await waitFor(() => screen.getByPlaceholderText(/search_placeholder/i))

    await waitFor(() => userEvent.type(searchField, 'Anemo'))

    expect(searchField).toHaveValue('anemo')
  })
});

