import {MouseEvent} from 'react';

export interface IPopoverProps {
  isShown: boolean
  onClickOutside: (e: MouseEvent | KeyboardEvent) => void
  classes?: string
  position?: Position
  onEscapePress: (e: KeyboardEvent) => void
}

export enum Position {
  RIGHT = 'right'
}

