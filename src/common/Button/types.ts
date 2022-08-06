import {ReactElement, MouseEvent, RefObject, PropsWithChildren} from 'react';

export interface IButtonProps extends PropsWithChildren {
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
