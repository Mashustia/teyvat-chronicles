import {IMaterial} from '../../../../charactersData/types';
import {WeekDays} from '../../../../const/consts';

export type ITableItemProps = {
  data: [string, IMaterial[]]
}

export interface IDungeonType {
  name: string
  is_open_days: WeekDays[]
  original_resin: number
}

export interface IDungeon {
  [key: string]: IDungeonType
}
