import {FC, ReactElement, useState} from 'react'

import Popover from '../../../../../../common/Popover';
import Button from '../../../../../../common/Button';
import {ButtonType} from '../../../../../../common/Button/types';
import {ILevelSelect} from './types';
import LevelSelectOptions from '../LevelSelectOptions';

const LevelSelect: FC<ILevelSelect> = ({ text }): ReactElement => {
  const [isPopoverShown, togglePopover] = useState(false)

  const handlePopoverToggle = () => togglePopover(!isPopoverShown)

  return (
    <div className='relative'>
      <Button type={ButtonType.BUTTON} onClick={handlePopoverToggle}>{text}</Button>
      <Popover isShown={isPopoverShown} onClickOutside={togglePopover}>
        <LevelSelectOptions/>
      </Popover>
    </div>
  )
}

export default LevelSelect
