import {FC, useEffect} from 'react'
import {useTranslation} from 'react-i18next';
import {observer} from 'mobx-react-lite';

import Characters from '../Characters';
import charactersStore from '../../../../store/modules/characters/characters';

const CharactersWrapper: FC = observer(() => {
  const {t} = useTranslation('character')

  useEffect(() => {
    charactersStore.setCharactersForSearch(t)
  }, [t])

  return <Characters characters={charactersStore.charactersForSearch}/>
})

export default CharactersWrapper
