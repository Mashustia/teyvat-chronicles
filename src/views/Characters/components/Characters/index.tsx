import {ChangeEvent, FC, useState} from 'react'
import {CloseButton, Form, InputGroup} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import CHARACTERS from '../../../../charactersData';
import {ICharacter} from '../../../../charactersData/types';
import {ICharacterProps as ICharacterWithSearchKeys} from '../Character/types';
import {Languages} from '../../../../const/consts';
import CharactersGroup from '../CharactersGroup';

import './Characters.css'

const Characters: FC = () => {
  const {t} = useTranslation('character')
  const characterWithTranslatedNames: ICharacterWithSearchKeys[] = CHARACTERS.map((character: ICharacter) => {
    const {name, vision} = character
    return ({
      ...character,
      search_keys: (`${
        t(`character:names.${name}`, { lng: Languages.EN})
      } ${
        t(`character:names.${name}`, { lng: Languages.RU})
      } ${
        t(`character:vision.${vision}`, { lng: Languages.EN})
      } ${
        t(`character:vision.${vision}`, { lng: Languages.RU}
        )}`).toLowerCase(),
      translated_name: t(`character:names.${name}`)
    })
  })

  const [filteredCharacters, setFilteredCharacters] = useState([...characterWithTranslatedNames])

  const handleFilter = ({target}: ChangeEvent<HTMLInputElement>) => {
    const value = target.value.toLowerCase().trim()
    const filteredCharacters = characterWithTranslatedNames.filter((character: ICharacterWithSearchKeys) => character.search_keys.includes(value))

    setFilteredCharacters(filteredCharacters)
  }

  const handleFiltersReset = () => setFilteredCharacters([...characterWithTranslatedNames])

  return <>
    <Form className='mb-4'>
      <Form.Group controlId='search'>
        <InputGroup className="mb-2">
          <Form.Control
            type='text'
            placeholder={t('character:search_placeholder')}
            onChange={handleFilter}
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

export default Characters
