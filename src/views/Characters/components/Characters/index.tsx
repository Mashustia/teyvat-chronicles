import {FC} from 'react'
import {Row} from 'react-bootstrap';
import {groupBy, sortBy} from 'lodash'

import Character from '../Character';
import CHARACTERS from '../../../../charactersData';
import {ICharacter} from '../../../../charactersData/types';

enum groupField {
  VISION = 'vision',
  NAME = 'name'
}

const sortedCharacters = sortBy(CHARACTERS, [groupField.VISION, groupField.NAME])

const Characters: FC = () => {
  const charactersByVision = groupBy(sortedCharacters, groupField.VISION)

  const groupedCharacterKeys = Object.keys(charactersByVision)

  const items = () => groupedCharacterKeys.map((key: string) => (
    <>
      <Row className='justify-content-center gy-2 gx-3 mb-5'>
        {charactersByVision[key].map((character: ICharacter) =>
          <Character key={character.name} {...character}/>)}
      </Row>
    </>
  ))

  return <>{items()}</>
}

export default Characters
