import {IDungeon} from '../views/Character/components/Material/types';
import {WeekDays} from '../const/consts';

export enum Region {
  MONDSTADT = 'monstadt'
}

const ForsakenRift = {
  name: 'forsaken_rift',
  region: Region.MONDSTADT,
  is_open_days: [WeekDays.WEDNESDAY, WeekDays.SATURDAY, WeekDays.SUNDAY],
  original_resin: 20
}

export const Dungeon: IDungeon = {
  mora: {
    name: 'ley_line_gold',
    is_open_days: [WeekDays.ALL_DAYS],
    original_resin: 20
  },
  teachings_of_ballad: { ...ForsakenRift },
  guide_to_ballad: { ...ForsakenRift },
  philosophies_of_ballad: { ...ForsakenRift }
}
