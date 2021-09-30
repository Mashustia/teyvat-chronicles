import { FC } from 'react'
import {Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Img} from 'react-image'

import './Character.css'
import {ICharacterProps as IProps} from './types';
import {createUrl} from '../../../../utils/utils';
import {ReactComponent as CharacterImageSkeleton} from '../CharacterImageSkeleton/CharacterImageSkeleton.svg'

const Character: FC<IProps> = ({ name, history, match }) => {
  const { t } = useTranslation();
  const imagePath = `/images/characters/${name}.png`
  const handleCharacterClick = () => history.push(createUrl(match, name))

  const image = (
    <Img
      src={imagePath}
      alt={name}
      className='character-img img-border'
      loader={<CharacterImageSkeleton/>}
    />
  )

  return (
    <Col xs={6} sm={3} md={3} lg={2} xl={2} xxl={1} className='pointer' onClick={handleCharacterClick}>
      <div className='character-img-wrapper mx-auto'>{image}</div>
      <h4>{t(`character:names.${name}`)}</h4>
    </Col>
  )
}

export default withRouter(Character)
