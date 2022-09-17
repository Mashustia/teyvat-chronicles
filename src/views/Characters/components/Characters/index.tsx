import {ChangeEvent, FC, useEffect, useState} from 'react'
import {CloseButton, Form, InputGroup} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {observer} from 'mobx-react-lite';

import CharactersGroup from '../CharactersGroup';
import charactersStore from '../../../../store/modules/characters/characters';
import './Characters.css'

const Characters: FC = () => {
  const {t} = useTranslation('character')

  const [search, setSearch] = useState('')

  const handleFilter = ({target}: ChangeEvent<HTMLInputElement>) => {
    const value = target.value.toLowerCase().trim()
    setSearch(value)

    charactersStore.searchForCharacters(value)
  }

  const handleFiltersReset = () => {
    setSearch('')
    charactersStore.resetFilteredCharacters()
  }

  useEffect(() => {
    charactersStore.setCharactersForSearch(t)
  }, [t])

  return (
    <>
      <Form className='mb-4'>
        <Form.Group controlId='search'>
          <InputGroup className='mb-2'>
            <Form.Control
              type='text'
              placeholder={t('character:search_placeholder')}
              onChange={handleFilter}
              value={search}
            />
            <InputGroup.Text>
              <CloseButton className='characters-search-cross' onClick={handleFiltersReset}/>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Form>
      <CharactersGroup characters={charactersStore.filteredCharacters}/>
    </>
  )
}

export default observer(Characters)
