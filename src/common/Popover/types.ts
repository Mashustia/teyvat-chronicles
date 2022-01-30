export interface IPopoverProps {
  isShown: boolean
  onClickOutside: (arg: boolean) => void
  classes?: string
  position?: Position
}

export enum Position {
  RIGHT = 'right'
}

