import {ReactElement} from 'react';

export interface IButtonProps {
  onClick: () => void
  iconLeft?: ReactElement
  type?: ButtonType
  classes?: string
}

export enum ButtonType {
  SUBMIT = 'submit',
  BUTTON = 'button',
  RESET = 'reset',
}
