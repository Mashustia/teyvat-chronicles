import {IMaterial} from '../../../../charactersData/types';
import {WeekDay} from '../../../../const/consts';
import {Region} from '../../../../charactersData/materials/expandedMaterialInfo';

export type ITableItemProps = {
  data: [string, IMaterial[]]
  isSummary?: boolean
}

export interface IDungeonType {
  name?: string
  is_open_days?: WeekDay[]
  original_resin?: number
  region?: Region
  map_link?: string
  has_image?: boolean
  additional_info?: string
}

export interface IDungeon {
  [key: string]: IDungeonType
}

export type ITableItemPropsReworked = {
  data: [IMaterial[]]
}
