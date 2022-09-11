import {ChangeEvent, FC, useState} from 'react'
import {CloseButton, Form, InputGroup} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {observer} from 'mobx-react-lite';

import {ICharacterProps as ICharacterWithSearchKeys} from '../Character/types'
import CharactersGroup from '../CharactersGroup';
import {ICharactersProps} from './types';
import './Characters.css'
import {Character} from '../../../../const/consts';

// @ts-ignore
const Characters: FC<ICharactersProps> = ({characters, charactersStore}) => {
  console.log(charactersStore, charactersStore.characters, charactersStore.getCharacterByName(Character.ALBEDO))
  const {t} = useTranslation('character')

  const [search, setSearch] = useState('')

  const handleFilter = ({target}: ChangeEvent<HTMLInputElement>) => {
    const value = target.value.toLowerCase().trim()
    setSearch(value)
  }

  const handleFiltersReset = () => {
    setSearch('')
  }

  const filteredCharacters = characters.filter((character: ICharacterWithSearchKeys) => character.search_keys.includes(search))

  return <>
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
    <CharactersGroup characters={filteredCharacters}/>
  </>
}

export default observer(Characters)
