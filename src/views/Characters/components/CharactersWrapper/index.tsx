import {FC} from 'react'
import {useTranslation} from 'react-i18next';

import CHARACTERS from '../../../../charactersData';
import {ICharacterProps as ICharacterWithSearchKeys} from '../Character/types';
import Characters from '../Characters';
import {getCharactersWithTranslatedNames} from '../../../../utils/utils';

const CharactersWrapper: FC = () => {
  const {t} = useTranslation('character')

  const characterWithTranslatedNames: ICharacterWithSearchKeys[] = getCharactersWithTranslatedNames(CHARACTERS, t)

  return <Characters characters={characterWithTranslatedNames}/>
}

export default CharactersWrapper
