import {IDungeon} from '../views/Character/components/Material/types';
import {WeekDay} from '../const/consts';

export enum Region {
  MONDSTADT = 'monstadt',
  LIYUE = 'liyue'
}

const ForsakenRift = {
  name: 'forsaken_rift',
  region: Region.MONDSTADT,
  original_resin: 20
}

const Ballad = {
  ...ForsakenRift,
  is_open_days: [WeekDay.WEDNESDAY, WeekDay.SATURDAY, WeekDay.SUNDAY]
}

const Resistance = {
  ...ForsakenRift,
  is_open_days: [WeekDay.TUESDAY, WeekDay.FRIDAY, WeekDay.SUNDAY]
}

const Freedom = {
  ...ForsakenRift,
  is_open_days: [WeekDay.MONDAY, WeekDay.THURSDAY, WeekDay.SUNDAY]
}

const TaishanMansion = {
  name: 'taishan_mansion',
  region: Region.LIYUE,
  original_resin: 20
}

const Prosperity = {
  ...TaishanMansion,
  is_open_days: [WeekDay.MONDAY, WeekDay.THURSDAY, WeekDay.SUNDAY]
}

const Diligence = {
  ...TaishanMansion,
  is_open_days: [WeekDay.TUESDAY, WeekDay.FRIDAY, WeekDay.SUNDAY]
}

const Gold = {
  ...TaishanMansion,
  is_open_days: [WeekDay.WEDNESDAY, WeekDay.SATURDAY, WeekDay.SUNDAY]
}

export const Dungeon: IDungeon = {
  mora: {
    name: 'ley_line_gold',
    is_open_days: [WeekDay.ALL_DAYS],
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
  philosophies_of_freedom: {...Freedom},
  teachings_of_prosperity: {...Prosperity},
  guide_to_prosperity: {...Prosperity},
  philosophies_of_prosperity: {...Prosperity},
  teachings_of_diligence: {...Diligence},
  guide_to_diligence: {...Diligence},
  philosophies_of_diligence: {...Diligence},
  teachings_of_gold: {...Gold},
  guide_to_gold: {...Gold},
  philosophies_of_gold: {...Gold},
}
