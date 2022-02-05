import {FC, useRef} from 'react'
import cn from 'classnames';

import {IPopoverProps as IProps, Position} from './types';
import {useOnClickOutside} from '../../hooks/useOnClickOutside';
import './Popover.css'

const Popover: FC<IProps> = ({ children, isShown, onClickOutside, position, classes }) => {
  const popoverRef = useRef(null);
  useOnClickOutside(popoverRef, onClickOutside)

  return isShown ? (
    <div ref={popoverRef} className={cn('absolute popover--index', position === Position.RIGHT && 'popover--right', classes)}>{children}</div>
  ) : null
}

export default Popover
