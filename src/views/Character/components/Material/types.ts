import {IMaterial} from '../../../../charactersData/types';
import {WeekDay} from '../../../../const/consts';
import {Region} from '../../../../charactersData/dungeons';

export type ITableItemProps = {
  data: [string, IMaterial[]]
}

export interface IDungeonType {
  name: string
  is_open_days: WeekDay[]
  original_resin: number
  region?: Region
  map_link?: string
  has_image?: boolean
}

export interface IDungeon {
  [key: string]: IDungeonType
}
