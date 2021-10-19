import {IMaterial} from '../../../../charactersData/types';

export type ITableItemProps = {
  data: [string, IMaterial[]]
}

export interface IDungeonType {
  name: string
  is_open_days: string[]
  original_resin: number
}

export interface IDungeon {
  [key: string]: IDungeonType
}
