import {
  render,
  waitFor,
  screen
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {renderWithI18AndSuspenseAndRouter, renderWithI18AndSuspenseAndRouterAndMobX} from '../../../../utils/testUtils';
import {RouteName} from '../../../../const/consts';
import Characters from './index';
import charactersStore from '../../../../store/modules/characters/characters';

describe('Characters', () => {
  const path = RouteName.DEFAULT
  const initialEntries = [RouteName.DEFAULT]

  test('renders Characters component', async () => {
    render(
      renderWithI18AndSuspenseAndRouter(<Characters/>, path, initialEntries)
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    const searchField = await screen.findByRole('textbox')
    expect(searchField).toBeInTheDocument()
  })

  test('character search works', async () => {
    render(
      renderWithI18AndSuspenseAndRouterAndMobX(charactersStore, <Characters/>, path, initialEntries)
    )

    const charactersBeforeSearch = await screen.findAllByRole('heading', {level: 4});
    expect(charactersBeforeSearch.length).toBeGreaterThan(50)

    const searchField = await screen.findByRole('textbox')
    await waitFor(() => userEvent.type(searchField, 'Albedo'))

    const charactersAfterSearch = await screen.findAllByRole('heading', {level: 4});
    expect(charactersAfterSearch).toHaveLength(1)
    expect(charactersAfterSearch[0]).toHaveTextContent('Albedo')
  })

  test('onChange function works in search', async () => {
    render(
      renderWithI18AndSuspenseAndRouter(<Characters/>, path, initialEntries)
    )

    const searchField = await screen.findByRole('textbox')
    await waitFor(() => userEvent.type(searchField, 'Anemo'))

    expect(searchField).toHaveValue('anemo')
  })
});

