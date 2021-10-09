import {FC} from 'react'
import {Col} from 'react-bootstrap';

import CharacterImage from '../../../../common/CharacterImage';
import Stars from '../../../../common/Stars';
import {ICharacterProps as IProps} from './types';

const Character: FC<IProps> = ({name, rarity, translated_name}) => (
  <Col xs={6} sm={3} md={3} lg={2} xl={2}>
    <CharacterImage name={name} withBorder={true} withLink={true}/>
    <h4 className='d-flex justify-content-center mb-0'>{translated_name}</h4>
    <div className='mb-3'>{<Stars count={rarity}/>}</div>
  </Col>
)

export default Character
