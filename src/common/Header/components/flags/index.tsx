import {FC, ReactElement} from 'react'
import {useTranslation} from 'react-i18next';

import {ReactComponent as USFlagImage} from './images/us.svg'
import {ReactComponent as RUFlagImage} from './images/ru.svg'
import {IFlagsProps as IProps} from './types';
import './Flags.css'
import {Language} from '../../../../const/translations';
import {Languages} from '../../../../const/consts';

const Flags: FC<IProps> = ({ language }): ReactElement => {
  const {t} = useTranslation()

  const getFlag = () => language === Languages.RU ? <RUFlagImage/> : <USFlagImage/>
  return <>
    <span className='flag me-2'>{getFlag()}</span>
    <span>{t(Language[language])}</span>
  </>
}

export default Flags
