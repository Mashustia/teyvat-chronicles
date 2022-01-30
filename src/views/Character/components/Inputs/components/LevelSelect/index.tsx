import {FC, ReactElement, useState} from 'react'

import Popover from '../../../../../../common/Popover';
import Button from '../../../../../../common/Button';
import {ButtonType} from '../../../../../../common/Button/types';
import {ILevelSelect} from './types';
import LevelSelectOptions from '../LevelSelectOptions';
import './LevelSelect.css'

const LevelSelect: FC<ILevelSelect> = ({ text, position }): ReactElement => {
  const [isPopoverShown, togglePopover] = useState(false)

  const handlePopoverToggle = () => togglePopover(!isPopoverShown)

  return (
    <div className='relative'>
      <Button type={ButtonType.BUTTON} onClick={handlePopoverToggle} classes='level-select__button'>{text}</Button>
      <Popover isShown={isPopoverShown} onClickOutside={togglePopover} position={position}>
        <LevelSelectOptions/>
      </Popover>
    </div>
  )
}

export default LevelSelect
