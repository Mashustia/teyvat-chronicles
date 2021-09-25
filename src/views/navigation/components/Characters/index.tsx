import { FC } from 'react'
import {Row} from 'react-bootstrap';
import Character from '../Character';

import characters from '../../../../charactersData'
import {ICharacterType} from '../../../../charactersData/types';


const Characters: FC = () => {
  const items = () => characters.map((character: ICharacterType) => <Character key={character.name}/>)

  return (
    <Row>
      {items()}
    </Row>
  )
}

export default Characters
