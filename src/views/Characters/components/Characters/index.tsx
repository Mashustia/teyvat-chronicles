import { FC } from 'react'
import {Row} from 'react-bootstrap';
import { sortBy } from 'lodash'

import Character from '../Character';
import CHARACTERS from '../../../../charactersData';
import {ICharacter} from '../../../../charactersData/types';

enum groupField {
  VISION = 'vision',
  NAME = 'name'
}

const sortedCharacters = sortBy(CHARACTERS, [groupField.VISION, groupField.NAME])

const Characters: FC = () => {
  const items = () => sortedCharacters.map((character: ICharacter) =>
    <Character key={character.name} {...character}/>)

  return (
    <Row className='justify-content-center gy-2 gx-3'>
      {items()}
    </Row>
  )
}

export default Characters
