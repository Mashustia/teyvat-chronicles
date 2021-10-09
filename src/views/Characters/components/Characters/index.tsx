import {FC, Fragment} from 'react'
import {Row} from 'react-bootstrap';
import {groupBy, sortBy} from 'lodash'

import Character from '../Character';
import CHARACTERS from '../../../../charactersData';
import {ICharacter} from '../../../../charactersData/types';
import {useTranslation} from 'react-i18next';

enum groupField {
  VISION = 'vision',
  NAME = 'name',
  TRANSLATED_NAME = 'translated_name'
}

const Characters: FC = () => {
  const {t} = useTranslation()

  const characterWithTranslatedNames = CHARACTERS.map((character: ICharacter) => {
    const {name, vision} = character
    return ({
      ...character,
      translated_name: t(`character:names.${name}`),
      translated_vision: t(`character:vision.${vision}`)
    })
  })

  const sortedCharacters = sortBy(characterWithTranslatedNames, [groupField.VISION, groupField.TRANSLATED_NAME])

  const charactersByVision = groupBy(sortedCharacters, groupField.VISION)

  const groupedCharacterKeys = Object.keys(charactersByVision)

  const items = () => groupedCharacterKeys.map((key: string) => (
    <Fragment key={key}>
      <Row className='justify-content-center gx-3 mt-3 mb-5'>
        {charactersByVision[key].map((character: ICharacter) =>
          <Character key={character.name} {...character}/>)}
      </Row>
    </Fragment>
  ))

  return <>{items()}</>
}

export default Characters
