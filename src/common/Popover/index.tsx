import {FC, useRef} from 'react'

import {IPopoverProps as IProps} from './types';
import {useOnClickOutside} from '../../hooks/useOnClickOutside';

const Popover: FC<IProps> = ({ children, isShown, onClickOutside }) => {
  const popoverRef = useRef(null);
  useOnClickOutside(popoverRef, () => onClickOutside(!isShown))

  return isShown ? (
    <div ref={popoverRef} className='absolute'>{children}</div>
  ) : null
}

export default Popover
