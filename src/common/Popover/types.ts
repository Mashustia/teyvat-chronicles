import {MouseEvent} from 'react';

export interface IPopoverProps {
  isShown: boolean
  onClickOutside: (e: MouseEvent | KeyboardEvent) => void
  classes?: string
  position?: Position
}

export enum Position {
  RIGHT = 'right'
}

