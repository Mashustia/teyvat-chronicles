import {FC, ReactElement} from 'react'

import './Button.css';
import {IButtonProps as IProps} from './types';

const Button: FC<IProps> = ({ children,  onClick }): ReactElement => (
  <button className='button' onClick={onClick}>{children}</button>
)

export default Button
