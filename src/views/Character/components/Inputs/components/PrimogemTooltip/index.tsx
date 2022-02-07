import {FC, ReactElement, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import {useTranslation} from 'react-i18next';

import {FontAwesomeIconSize} from '../../../../../../const/consts';
import './PrimogemTooltip.css'

const PrimogemTooltip: FC = (): ReactElement => {
  const {t} = useTranslation(['common']);
  const [isTooltipShown, toggleTooltip] = useState(false)

  const handleTooltipToggle = () => toggleTooltip(!isTooltipShown)

  const primogem = (
    <img src='/images/icons/primogem-2.png' alt='primogem' className='primogem-tooltip__primogem ms-1 me-2'/>
  )

  return (
    <div className='primogem-tooltip mb-0 text-left d-flex'>
      <FontAwesomeIcon icon={faQuestionCircle} onClick={handleTooltipToggle} size={FontAwesomeIconSize.LG} className='pointer mt-1'/>
      {isTooltipShown && (
        <div className='primogem-tooltip__text text-center'>
          {primogem}
          {t('common:primogem_meaning')}
        </div>
      )}
    </div>
  )
}

export default PrimogemTooltip
