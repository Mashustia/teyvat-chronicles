import {FC} from 'react'

import {ButtonType} from '../../../Button/types';
import Button from '../../../Button';
import {IBurgerProps as IProps} from './types';

const Burger: FC<IProps> = ({ classes, onClick }) => {
  const burgerImage = <img src='/images/icons/icon-menu.svg' alt='burger' width='22px' height='18px'/>

  return <Button type={ButtonType.BUTTON} onClick={onClick} classes={classes}>{burgerImage}</Button>
}

export default Burger
