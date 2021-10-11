import {FC, Fragment} from 'react'
import {groupBy, sortBy} from 'lodash'
import {useTranslation} from 'react-i18next';

import Character from '../Character';
import {ICharactersGroup as IProps} from './types';
import {ICharacterProps as ICharacter} from '../Character/types';
import './CharactersGroup.css'

export enum groupField {
  VISION = 'vision',
  NAME = 'name',
  TRANSLATED_NAME = 'translated_name'
}

const CharactersGroup: FC<IProps> = ({characters}) => {
  const {t} = useTranslation('character')

  if (characters.length === 0) {
    return (
      <p className='fs-5'>{t('character:character_not_found')}</p>
    )
  }

  const sortedCharacters = sortBy(characters, [groupField.VISION, groupField.TRANSLATED_NAME])
  const charactersByVision = groupBy(sortedCharacters, groupField.VISION)
  const groupedCharacterKeys = Object.keys(charactersByVision)

  const items = () => groupedCharacterKeys.map((key: string) => (
    <Fragment key={key}>
      <div className='characters-group mb-5 d-flex justify-content-center flex-wrap'>
        {charactersByVision[key].map((character: ICharacter) =>
          <Character key={character.name} {...character}/>)}
      </div>
    </Fragment>
  ))

  return <>{items()}</>
}

export default CharactersGroup
