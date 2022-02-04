import {FC, ReactElement, useState, MouseEvent, useRef, RefObject} from 'react'

import Popover from '../../../../../../common/Popover';
import Button from '../../../../../../common/Button';
import {ButtonType} from '../../../../../../common/Button/types';
import {ILevelSelect} from './types';
import LevelSelectOptions from '../LevelSelectOptions';
import './LevelSelect.css'

const LevelSelect: FC<ILevelSelect> = ({text, position, onSelectOption, levelInfo}): ReactElement => {
  const [isPopoverShown, togglePopover] = useState(false)
  const toggleButtonRef: RefObject<HTMLButtonElement> | null = useRef(null);

  const handleOutsideClick = (e: MouseEvent | KeyboardEvent) => {
    if (toggleButtonRef?.current?.contains(e.target as HTMLElement)) return

    return togglePopover(!isPopoverShown)
  }

  const handlePopoverToggle = () => togglePopover(!isPopoverShown)

  const ascensionIcon = (
    <img src='/images/icons/primogem-2.png' alt='primogem' className='level-select__image ms-1'/>
  )

  return (
    <div className='relative'>
      <Button
        type={ButtonType.BUTTON}
        onClick={handlePopoverToggle}
        innerRef={toggleButtonRef}
        classes='level-select__button'
      >
        <span className='d-flex align-items-center justify-content-center'>
          {text}
          {levelInfo.isAscended ? ascensionIcon : undefined}
        </span>
      </Button>
      <Popover isShown={isPopoverShown} onClickOutside={handleOutsideClick} position={position}>
        <LevelSelectOptions onSelectOption={onSelectOption} selectedLevel={levelInfo}/>
      </Popover>
    </div>
  )
}

export default LevelSelect
