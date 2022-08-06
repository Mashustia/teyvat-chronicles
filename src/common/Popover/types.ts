import {MouseEvent, PropsWithChildren} from 'react';

export interface IPopoverProps extends PropsWithChildren {
  isShown: boolean
  onClickOutside: (e: MouseEvent | KeyboardEvent) => void
  classes?: string
  position?: Position
  onEscapePress: (e: KeyboardEvent) => void
}

export enum Position {
  RIGHT = 'right'
}

