import {FC} from 'react'
import {Img} from 'react-image'

import './CharacterImage.css'
import {ReactComponent as CharacterImageSkeleton} from '../CharacterImageSkeleton/CharacterImageSkeleton.svg'
import {ICharacterImageProps as IProps} from './types';

const CharacterImage: FC<IProps> = ({name, withBorder}) => {
  const imagePath = `/images/characters/${name}.png`

  const image = (
    <Img
      src={imagePath}
      alt={name}
      className={`character-img ${withBorder && 'img-border'}`}
      loader={<CharacterImageSkeleton/>}
    />
  )

  return (
    <div className='character-img-wrapper mx-auto'>{image}</div>
  )
}

export default CharacterImage
