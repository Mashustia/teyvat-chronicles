import {FC} from 'react'
import {Img} from 'react-image'

import './CharacterImage.css'
import {ICharacterImageProps as IProps} from './types';
import {ReactComponent as CharacterImageSkeleton} from '../../views/Characters/components/CharacterImageSkeleton/CharacterImageSkeleton.svg'

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
