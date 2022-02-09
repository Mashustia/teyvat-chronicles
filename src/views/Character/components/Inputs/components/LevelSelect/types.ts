import {Position} from '../../../../../../common/Popover/types';
import {ILevel} from '../../../../../../charactersData/types';

export interface ILevelSelect {
  text: string
  position?: Position
  onSelectOption: (arg: ILevel) => void
  levelInfo: ILevel
  minLevel?: ILevel
}
