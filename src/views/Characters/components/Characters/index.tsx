import {ChangeEvent, FC, useState} from 'react'
import {Form} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import CHARACTERS from '../../../../charactersData';
import {ICharacter} from '../../../../charactersData/types';
import {ICharacterProps as ICharacterWithSearchKeys} from '../Character/types';
import {Languages} from '../../../../const/consts';
import CharactersGroup from '../CharactersGroup';


const Characters: FC = () => {
  const {t} = useTranslation()
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
      translated_name: t(`character:names.${name}`),
      translated_vision: t(`character:vision.${vision}`)
    })
  })

  const [filteredCharacters, setFilteredCharacters] = useState([...characterWithTranslatedNames])

  const handleFilter = ({target}: ChangeEvent<HTMLInputElement>) => {
    const value = target.value.toLowerCase()
    const filteredCharacters = characterWithTranslatedNames.filter((character: ICharacterWithSearchKeys) => character.search_keys.includes(value))

    setFilteredCharacters(filteredCharacters)
  }

  return <>
    <Form className='mb-4'>
      <Form.Group controlId='search'>
        <Form.Control type='text' placeholder={t('character:search_placeholder')} onChange={handleFilter}/>
      </Form.Group>
    </Form>
    <CharactersGroup characters={filteredCharacters}/>
  </>
}

export default Characters
