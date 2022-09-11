import {FC} from 'react'
import {useTranslation} from 'react-i18next';
import {observer} from 'mobx-react-lite';

import CHARACTERS from '../../../../charactersData';
import {ICharacterProps as ICharacterWithSearchKeys} from '../Character/types';
import Characters from '../Characters';
import {getCharactersWithTranslatedNames} from '../../../../utils/utils';
import charactersStore from '../../../../store/modules/characters/characters';

const CharactersWrapper: FC = observer(() => {
  const {t} = useTranslation('character')

  const characterWithTranslatedNames: ICharacterWithSearchKeys[] = getCharactersWithTranslatedNames(CHARACTERS, t)

  // @ts-ignore
  return <Characters characters={characterWithTranslatedNames} charactersStore={charactersStore}/>
})

export default CharactersWrapper
