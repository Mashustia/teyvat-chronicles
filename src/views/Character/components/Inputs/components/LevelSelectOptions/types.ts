import {ILevel} from '../../../../../../charactersData/types';

export interface ILevelSelectOption {
  onSelectOption: (option: ILevel) => () => void
  selectedLevel: ILevel
  minLevel?: ILevel
}
