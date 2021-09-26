import { FC } from 'react'
import {Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

import './Character.css'
import {ICharacterProps as IProps} from './types';
import {createUrl} from '../../../../utils/utils';
import {useTranslation} from 'react-i18next';
const Character: FC<IProps> = ({ name, history, match }) => {
  const { t } = useTranslation();
  const imagePath = `/images/characters/${name}.png`
  const handleCharacterClick = () => history.push(createUrl(match, name))

  return (
    <Col xs={6} sm={3} md={3} lg={2} xl={2} xxl={1} className='pointer' onClick={handleCharacterClick}>
      <img src={imagePath} alt={name} className='character-img' />
      <h4>{t(`character:names.${name}`)}</h4>
    </Col>
  )
}

export default withRouter(Character)
