import {IDungeon} from '../views/Character/components/Material/types';
import {WeekDays} from '../const/consts';

export enum Region {
  MONDSTADT = 'monstadt'
}

const ForsakenRift = {
  name: 'forsaken_rift',
  region: Region.MONDSTADT,
  original_resin: 20
}

const Ballad = {
  ...ForsakenRift,
  is_open_days: [WeekDays.WEDNESDAY, WeekDays.SATURDAY, WeekDays.SUNDAY]
}

const Resistance = {
  ...ForsakenRift,
  is_open_days: [WeekDays.TUESDAY, WeekDays.FRIDAY, WeekDays.SUNDAY]
}

const Freedom = {
  ...ForsakenRift,
  is_open_days: [WeekDays.MONDAY, WeekDays.THURSDAY, WeekDays.SUNDAY]
}

export const Dungeon: IDungeon = {
  mora: {
    name: 'ley_line_gold',
    is_open_days: [WeekDays.ALL_DAYS],
    original_resin: 20
  },
  teachings_of_ballad: {...Ballad},
  guide_to_ballad: {...Ballad},
  philosophies_of_ballad: {...Ballad},
  teachings_of_resistance: {...Resistance},
  guide_to_resistance: {...Resistance},
  philosophies_of_resistance: {...Resistance},
  teachings_of_freedom: {...Freedom},
  guide_to_freedom: {...Freedom},
  philosophies_of_freedom: {...Freedom}
}
