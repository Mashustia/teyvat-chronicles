import { FC } from 'react'
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {ICharacterProps as IProps} from './types';

const Character: FC<IProps> = ({ match: {params}}) => {
  const { t } = useTranslation();
  const { name } = params
  const imagePath = `/images/characters/${name}.png`

  return (
    <div>
      <img src={imagePath} alt={name} className='character-img' />
      <h1>{t(`character:names.${name}`)}</h1>
    </div>
  )
}

export default withRouter(Character)
