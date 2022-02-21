import {FC} from 'react'

import CharacterImage from '../../../../common/CharacterImage';
import Stars from '../../../../common/Stars';
import {ICharacterProps as IProps} from './types';
import './Character.css'

const Character: FC<IProps> = ({name, rarity, translated_name}) => (
  <div className='d-flex flex-column character mx-3 mb-4'>
    <CharacterImage name={name} withBorder={true} withLink={true}/>
    <h4 className='d-flex justify-content-center my-auto'>{translated_name}</h4>
    <div>{<Stars count={rarity}/>}</div>
  </div>
)

export default Character
