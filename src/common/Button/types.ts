import {ReactElement, MouseEvent, RefObject} from 'react';

export interface IButtonProps {
  onClick?: (e: MouseEvent) => void
  iconLeft?: ReactElement
  type?: ButtonType
  classes?: string
  innerRef?: RefObject<HTMLButtonElement>
}

export enum ButtonType {
  SUBMIT = 'submit',
  BUTTON = 'button',
  RESET = 'reset',
}
