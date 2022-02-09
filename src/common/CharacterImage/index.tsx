import {FC, ReactNode, Suspense} from 'react'
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import './CharacterImage.css'
import {ICharacterImageProps as IProps} from './types';
import {ReactComponent as CharacterImageSkeleton} from '../../views/Characters/components/CharacterImageSkeleton/CharacterImageSkeleton.svg'
import {createUrl} from '../../utils/utils';
import CHARACTERS from '../../charactersData';
import {ICharacter} from '../../charactersData/types';
import Img from '../Img';

const CharacterImage: FC<IProps> = ({name, withBorder, withLink}) => {
  const imagePath = `/images/characters/${name}.png`

  const characterVision = CHARACTERS.find((character: ICharacter) => character.name === name)
  const visionPath = `/images/elements/${characterVision?.vision}.png`

  const link = (children: ReactNode) => (
    <Link to={createUrl(name)} className='pointer'>{children}</Link>
  )

  const characterImage = (
    <Suspense fallback={<CharacterImageSkeleton/>}>
      <Img
        imagePath={imagePath}
        alt={name}
        classes={cn('character-img', characterVision?.rarity === 5 ? 'character-background-five-star' : 'character-background-four-star')}
      />
    </Suspense>
  )

  const visionImage = (
    <Img
      imagePath={visionPath}
      alt={name}
      classes='character-vision absolute'
    />
  )

  const character = (
    <div className={cn(withBorder && 'img-border')}>
      {characterImage}
      {characterVision?.vision && visionImage}
    </div>
  )

  const characterWrapper = withLink ? link(character) : character

  return (
    <div className='character-img-wrapper mx-auto mb-2 relative'>
      {characterWrapper}
    </div>
  )
}

export default withRouter(CharacterImage)
