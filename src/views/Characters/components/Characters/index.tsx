import {FC, Fragment} from 'react'
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
