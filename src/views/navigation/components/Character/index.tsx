import { FC } from 'react'
import {Col} from 'react-bootstrap';

import {ICharacter} from '../../../../charactersData/types';

const Character: FC<ICharacter> = ({ name }) => {
  const imagePath = `src/images/${name}`

  return (
    <Col xs={12} sm={6} md={2}>
      <img src={imagePath} alt={name} />
      <h4>{name}</h4>

    </Col>
  )
}

export default Character
