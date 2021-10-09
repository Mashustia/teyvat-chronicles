import {FC} from 'react'
import {useTranslation} from 'react-i18next';

import CHARACTERS from '../../../../charactersData';
import {ICharacter} from '../../../../charactersData/types';
import {ICharacterProps as ICharacterWithSearchKeys} from '../Character/types';
import {Languages} from '../../../../const/consts';
import Characters from '../Characters';

const CharactersWrapper: FC = () => {
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

  return <Characters characters={characterWithTranslatedNames}/>
}

export default CharactersWrapper
