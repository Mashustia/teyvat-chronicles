import {IDungeon} from '../views/Character/components/Material/types';
import {WeekDay} from '../const/consts';

export enum Region {
  MONDSTADT = 'monstadt',
  LIYUE = 'liyue',
  INAZUMA = 'inazuma'
}

const ForsakenRift = {
  name: 'forsaken_rift',
  region: Region.MONDSTADT,
  original_resin: 20,
  map_link: 'pin=1678|-894|Forsaken Rift'
}

const Mora = {
  name: 'ley_line_gold',
  is_open_days: [WeekDay.ALL_DAYS],
  original_resin: 20,
  has_image: true
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
  original_resin: 20,
  map_link: 'pin=645|1168|Taishan Mansion'
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

const VioletCourt = {
  name: 'violet_court',
  region: Region.INAZUMA,
  original_resin: 20,
  map_link: 'pin=-3260|-3940|Violet Court'
}

const Light = {
  ...VioletCourt,
  is_open_days: [WeekDay.WEDNESDAY, WeekDay.SATURDAY, WeekDay.SUNDAY]
}

const Elegance = {
  ...VioletCourt,
  is_open_days: [WeekDay.TUESDAY, WeekDay.FRIDAY, WeekDay.SUNDAY]
}

const Transience = {
  ...VioletCourt,
  is_open_days: [WeekDay.MONDAY, WeekDay.THURSDAY, WeekDay.SUNDAY]
}

const LupusBoreas = {
  name: 'lupus_boreas',
  region: Region.MONDSTADT,
  original_resin: 60,
  map_link: 'pin=2000|-260|Lupus Boreas',
  is_open_days: [WeekDay.ALL_DAYS]
}

const ConfrontStormterror = {
  name: 'confront_stormterror',
  region: Region.MONDSTADT,
  original_resin: 60,
  map_link: 'pin=2670|130|Confront Stormterror',
  is_open_days: [WeekDay.ALL_DAYS]
}

const EnterTheGoldenHouse = {
  name: 'enter_the_golden_house',
  region: Region.LIYUE,
  original_resin: 60,
  map_link: 'pin=-940|230|Enter the Golden House',
  is_open_days: [WeekDay.ALL_DAYS]
}

const BeneathTheDragonQueller = {
  name: 'beneath_the_dragon_queller',
  region: Region.LIYUE,
  original_resin: 60,
  map_link: 'pin=620|1765|Beneath the Dragon-Queller',
  is_open_days: [WeekDay.ALL_DAYS]
}

const NarukamiIslandTenshukaku = {
  name: 'narukami_island_tenshukaku',
  region: Region.INAZUMA,
  original_resin: 60,
  map_link: 'pin=-3395|-4560|Narukami Island: Tenshukaku',
  is_open_days: [WeekDay.ALL_DAYS]
}

const AnemoHypostasis = {
  name: 'anemo_hypostasis',
  region: Region.MONDSTADT,
  original_resin: 40,
  map_link: 'pin=2920|-1300|Anemo Hypostasis'
}

export const Dungeon: IDungeon = {
  mora: {...Mora},
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
  teachings_of_light: {...Light},
  guide_to_light: {...Light},
  philosophies_of_light: {...Light},
  teachings_of_transience: {...Transience},
  guide_to_transience: {...Transience},
  philosophies_of_transience: {...Transience},
  teachings_of_elegance: {...Elegance},
  guide_to_elegance: {...Elegance},
  philosophies_of_elegance: {...Elegance},
  tail_of_boreas: {...LupusBoreas},
  spirit_locket_of_boreas: {...LupusBoreas},
  ring_of_boreas: {...LupusBoreas},
  dvalins_clawn: {...ConfrontStormterror},
  dvalins_plume: {...ConfrontStormterror},
  dvalins_sigh: {...ConfrontStormterror},
  shard_of_a_foul_legacy: {...EnterTheGoldenHouse},
  shadow_of_the_warrior: {...EnterTheGoldenHouse},
  tusk_of_monoceros_caeli: {...EnterTheGoldenHouse},
  bloodjade_branch: {...BeneathTheDragonQueller},
  dragon_lords_crown: {...BeneathTheDragonQueller},
  gilded_scale: {...BeneathTheDragonQueller},
  ashen_heart: {...NarukamiIslandTenshukaku},
  hellfire_butterfly: {...NarukamiIslandTenshukaku},
  molten_moment: {...NarukamiIslandTenshukaku},
  hurricane_seed: {...AnemoHypostasis},
}
