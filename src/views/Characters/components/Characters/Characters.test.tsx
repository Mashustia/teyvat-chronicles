import {
  render,
  waitFor,
  screen
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {renderWithI18AndSuspenseAndRouter} from '../../../../utils/testUtils';
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
  const path = RouteName.DEFAULT
  const initialEntries = [RouteName.DEFAULT]

  test('renders Characters component', async () => {
    render(
      renderWithI18AndSuspenseAndRouter(<Characters characters={MOCK_CHARACTERS}/>, path, initialEntries)
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    const searchField = await screen.findByRole('textbox')
    expect(searchField).toBeInTheDocument()
  })

  test('character search works', async () => {
    render(
      renderWithI18AndSuspenseAndRouter(<Characters characters={MOCK_CHARACTERS}/>, path, initialEntries)
    )

    const charactersBeforeSearch = await screen.findAllByRole('link')
    expect(charactersBeforeSearch).toHaveLength(2)
    expect(charactersBeforeSearch[0]).toHaveAttribute('href', '/Jean')
    expect(charactersBeforeSearch[1]).toHaveAttribute('href', '/Albedo')

    const searchField = await screen.findByRole('textbox')
    await waitFor(() => userEvent.type(searchField, 'Albedo'))

    const charactersAfterSearch = await screen.findAllByRole('link')
    expect(charactersAfterSearch).toHaveLength(1)
    expect(charactersAfterSearch[0]).toHaveAttribute('href', '/Albedo')
  })

  test('onChange function works in search', async () => {
    render(
      renderWithI18AndSuspenseAndRouter(<Characters characters={MOCK_CHARACTERS}/>, path, initialEntries)
    )

    const searchField = await screen.findByRole('textbox')
    await waitFor(() => userEvent.type(searchField, 'Anemo'))

    expect(searchField).toHaveValue('anemo')
  })
});

