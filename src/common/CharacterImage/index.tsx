import {FC, ReactNode} from 'react'
import {Img} from 'react-image'
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import './CharacterImage.css'
import {ICharacterImageProps as IProps} from './types';
import {ReactComponent as CharacterImageSkeleton} from '../../views/Characters/components/CharacterImageSkeleton/CharacterImageSkeleton.svg'
import {createUrl} from '../../utils/utils';

const CharacterImage: FC<IProps> = ({name, withBorder, withLink, match}) => {
  const imagePath = `/images/characters/${name}.png`

  const link = (children: ReactNode) => (
    <Link to={createUrl(name)} className='pointer'>{children}</Link>
  )

  const image = (
    <Img
      src={imagePath}
      alt={name}
      className={cn('character-img', withBorder && 'img-border')}
      loader={<CharacterImageSkeleton/>}
    />
  )

  const characterImage = withLink ? link(image) : image

  return (
    <div className='character-img-wrapper mx-auto mb-2'>{characterImage}</div>
  )
}

export default withRouter(CharacterImage)
