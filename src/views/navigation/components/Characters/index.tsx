import { FC } from 'react'
import {Row} from 'react-bootstrap';
import Character from '../Character';

import CHARACTERS from '../../../../charactersData'
import {ICharacter} from '../../../../charactersData/types';


const Characters: FC = () => {
  const items = () => CHARACTERS.map((character: ICharacter) =>
    <Character key={character.name} {...character}/>)

  return (
    <Row className='justify-content-center'>
      {items()}
    </Row>
  )
}

export default Characters
