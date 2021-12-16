import {FC, ReactNode} from 'react'
import {Img} from 'react-image'
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import './CharacterImage.css'
import {ICharacterImageProps as IProps} from './types';
import {ReactComponent as CharacterImageSkeleton} from '../../views/Characters/components/CharacterImageSkeleton/CharacterImageSkeleton.svg'
import {createUrl} from '../../utils/utils';
import CHARACTERS from '../../charactersData';
import {ICharacter} from '../../charactersData/types';

const CharacterImage: FC<IProps> = ({name, withBorder, withLink}) => {
  const imagePath = `/images/characters/${name}.png`

  const characterVision = CHARACTERS.find((character: ICharacter) => character.name === name)
  const visionPath = `/images/elements/${characterVision?.vision}.png`

  const link = (children: ReactNode) => (
    <Link to={createUrl(name)} className='pointer'>{children}</Link>
  )

  const image = (
    <Img
      src={imagePath}
      alt={name}
      className={cn('character-img', characterVision?.rarity === 5 ? 'character-background-five-star' : 'character-background-four-star')}
      loader={<CharacterImageSkeleton/>}
    />
  )

  const visionImage = (
    <Img
      src={visionPath}
      alt={name}
      className='character-vision absolute'
    />
  )

  const characterImage = withLink ? link(image) : image

  return (
    <div className='character-img-wrapper mx-auto mb-2 relative'>
      <div className={cn(withBorder && 'img-border')}>
        {characterImage}
        {characterVision?.vision && visionImage}
      </div>
    </div>
  )
}

export default withRouter(CharacterImage)
