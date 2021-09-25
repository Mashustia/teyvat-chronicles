import { FC } from 'react'
import {Col} from 'react-bootstrap';

import {ICharacter} from '../../../../charactersData/types';

import './character.css'

const Character: FC<ICharacter> = ({ name }) => {
  const imagePath = `/images/characters/${name}.png`

  return (
    <Col xs={12} sm={6} md={2} className='pointer'>
      <img src={imagePath} alt={name} className='character-img' />
      <h4>{name}</h4>

    </Col>
  )
}

export default Character
