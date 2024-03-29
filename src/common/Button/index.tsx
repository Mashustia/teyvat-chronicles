import {FC, ReactElement} from 'react'
import cn from 'classnames';

import './Button.css';
import {ButtonType, IButtonProps as IProps} from './types';

const Button: FC<IProps> = ({ children,  onClick, iconLeft, type, classes = ButtonType.BUTTON, innerRef }): ReactElement => (
  <button className={cn('button', classes)} onClick={onClick} type={type} ref={innerRef}>
    {children}
    {iconLeft}
  </button>
)

export default Button
