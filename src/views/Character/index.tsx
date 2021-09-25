import { FC } from 'react'
import {Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

import './character.css'
import {ICharacterProps as IProps} from './types';
import {createUrl} from '../../utils/utils';

const Character: FC<IProps> = ({ name, history, match }) => {
  const imagePath = `/images/characters/${name}.png`
  const handleCharacterClick = () => history.push(createUrl(match, name))

  return (
    <Col xs={12} sm={6} md={2} className='pointer' onClick={handleCharacterClick}>
      <img src={imagePath} alt={name} className='character-img' />
      <h4>{name}</h4>

    </Col>
  )
}

export default withRouter(Character)
