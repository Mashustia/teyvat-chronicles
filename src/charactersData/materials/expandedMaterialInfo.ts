import {IDungeon} from '../../views/Character/components/Material/types';
import {WeekDay} from '../../const/consts';
import {CROWN_OF_INSIGHT, MORA} from './materialNames';

export enum Region {
  MONDSTADT = 'monstadt',
  LIYUE = 'liyue',
  INAZUMA = 'inazuma',
  ENKANOMIA = 'enkanomia',
  THE_CHASM = 'the_chasm',
  SUMERU = 'sumeru',
}

const LeyLineOutcropsBlossomOfWealth = {
  name: 'ley_line_outcrops_blossom_of_wealth',
  is_open_days: [WeekDay.ALL_DAYS],
  original_resin: 20,
  has_image: true
}

const LeyLineOutcropsBlossomOfRevelation = {
  name: 'ley_line_outcrops_blossom_of_revelation',
  is_open_days: [WeekDay.ALL_DAYS],
  original_resin: 20,
  has_image: true
}

// Dungeons
// TODO: uncomment map link when pins image will work again in embedded map
const ForsakenRift = {
  name: 'forsaken_rift',
  region: Region.MONDSTADT,
  original_resin: 20,
  // map_link: 'pin=1678|-894|Forsaken Rift'
}

const VioletCourt = {
  name: 'violet_court',
  region: Region.INAZUMA,
  original_resin: 20,
  // map_link: 'pin=-3260|-3940|Violet Court'
}

const TaishanMansion = {
  name: 'taishan_mansion',
  region: Region.LIYUE,
  original_resin: 20,
  // map_link: 'pin=645|1168|Taishan Mansion'
}

const SteepleOfIgnorance = {
  name: 'steeple_of_ignorance',
  region: Region.SUMERU,
  original_resin: 20
}

// Books

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

const Admonition = {
  ...SteepleOfIgnorance,
  is_open_days: [WeekDay.MONDAY, WeekDay.THURSDAY, WeekDay.SUNDAY]
}

const Ingenuity = {
  ...SteepleOfIgnorance,
  is_open_days: [WeekDay.TUESDAY, WeekDay.FRIDAY, WeekDay.SUNDAY]
}

const Praxis = {
  ...SteepleOfIgnorance,
  is_open_days: [WeekDay.WEDNESDAY, WeekDay.SATURDAY, WeekDay.SUNDAY]
}

// Weekly Bosses

const LupusBoreas = {
  name: 'lupus_boreas',
  region: Region.MONDSTADT,
  original_resin: 60,
  // map_link: 'pin=2000|-260|Lupus Boreas',
  is_open_days: [WeekDay.ALL_DAYS]
}

const ConfrontStormterror = {
  name: 'confront_stormterror',
  region: Region.MONDSTADT,
  original_resin: 60,
  // map_link: 'pin=2670|130|Confront Stormterror',
  is_open_days: [WeekDay.ALL_DAYS]
}

const EnterTheGoldenHouse = {
  name: 'enter_the_golden_house',
  region: Region.LIYUE,
  original_resin: 60,
  // map_link: 'pin=-940|230|Enter the Golden House',
  is_open_days: [WeekDay.ALL_DAYS]
}

const BeneathTheDragonQueller = {
  name: 'beneath_the_dragon_queller',
  region: Region.LIYUE,
  original_resin: 60,
  // map_link: 'pin=620|1765|Beneath the Dragon-Queller',
  is_open_days: [WeekDay.ALL_DAYS]
}

const NarukamiIslandTenshukaku = {
  name: 'narukami_island_tenshukaku',
  region: Region.INAZUMA,
  original_resin: 60,
  // map_link: 'pin=-3395|-4560|Narukami Island: Tenshukaku',
  is_open_days: [WeekDay.ALL_DAYS]
}

const EndOfTheOneiricEuthymia = {
  name: 'end_of_the_oneiric_euthymia',
  region: Region.INAZUMA,
  original_resin: 60,
  // map_link: 'pin=-3395|-4560|Narukami Island: Tenshukaku',
  is_open_days: [WeekDay.ALL_DAYS]
}

// Hypostasis

const AnemoHypostasis = {
  name: 'anemo_hypostasis',
  region: Region.MONDSTADT,
  original_resin: 40,
  // map_link: 'pin=2920|-1300|Anemo Hypostasis'
}

const ElectroHypostasis = {
  name: 'electro_hypostasis',
  region: Region.MONDSTADT,
  original_resin: 40,
  // map_link: 'pin=1300|-1940|Electro Hypostasis'
}

const GeoHypostasis = {
  name: 'geo_hypostasis',
  region: Region.LIYUE,
  original_resin: 40,
  // map_link: 'pin=30|-850|Geo hypostasis'
}

const CryoHypostasis = {
  name: 'cryo_hypostasis',
  region: Region.MONDSTADT,
  original_resin: 40,
  // map_link: 'pin=1040|-820|Cryo Hypostasis',
}

const PerpetualMechanicalArray = {
  name: 'perpetual_mechanical_array',
  region: Region.INAZUMA,
  original_resin: 40,
  // map_link: 'pin=-2160|-4460|Perpetual mechanical array',
}

const HydroHypostasis = {
  name: 'hydro_hypostasis',
  region: Region.INAZUMA,
  original_resin: 40,
  // map_link: 'pin=-3600|-970|Hydro Hypostasis'
}

const PyroHypostasis = {
  name: 'pyro_hypostasis',
  region: Region.INAZUMA,
  original_resin: 40,
  // map_link: 'pin=-3090|-3185|Pyro Hypostasis'
}

// Regisvines

const PyroRegisvine = {
  name: 'pyro_regisvine',
  region: Region.LIYUE,
  original_resin: 40,
  // map_link: 'pin=140|950|Pyro Regisvine'
}

const CryoRegisvine = {
  name: 'cryo_regisvine',
  region: Region.MONDSTADT,
  original_resin: 40,
  // map_link: 'pin=2100|-1680|Cryo Regisvine'
}

const ElectroRegisvine = {
  name: 'electro_regisvine',
  region: Region.SUMERU,
  original_resin: 40
}

// Others

const Oceanid = {
  name: 'oceanid',
  region: Region.LIYUE,
  original_resin: 40,
  // map_link: 'pin=1800|280|Oceanid'
}

const ThunderManifestation = {
  name: 'thunder_manifestation',
  region: Region.INAZUMA,
  original_resin: 40,
  // map_link: 'pin=-4760|-4260|Thunder Manifestation'
}

const PrimoGeovishap = {
  name: 'primo_geovishap',
  region: Region.LIYUE,
  original_resin: 40,
  // map_link: 'pin=190|1480|Primo geovishap'
}

const MaguuKenki = {
  name: 'maguu_kenki',
  region: Region.LIYUE,
  original_resin: 40,
  // map_link: 'pin=-4000|-2340|Maguu Kenki'
}

const GoldenWolflord = {
  name: 'golden_wolflord',
  region: Region.INAZUMA,
  original_resin: 40,
  // map_link: 'pin=-6720|-2660|Golden Wolflord'
}

const BathysmalVishapHerd = {
  name: 'bathysmal_vishap_herd',
  region: Region.ENKANOMIA,
  original_resin: 40,
}

const RuinSerpent = {
  name: 'ruin_serpent',
  region: Region.THE_CHASM,
  original_resin: 40,
}

const JadeplumeTerrorshroom = {
  name: 'jadeplume_terrorshroom',
  region: Region.SUMERU,
  original_resin: 40,
}

const AlgorithmOfSemiIntransientMatrixOfOverseerNetwork = {
  name: 'algorithm_of_semi_intransient_matrix_of_overseer_network',
  region: Region.SUMERU,
  original_resin: 40,
}

const aeonblightDrake = {
  name: 'aeonblight_drake',
  region: Region.SUMERU,
  original_resin: 40,
}

const crownOfInsight = {
  additional_info: 'crown_of_insight_how_to_get'
}

const brilliantDiamondSliver = {
  additional_info: 'brilliant_diamond_sliver_how_to_get'
}

const brilliantDiamondFragment = {
  additional_info: 'brilliant_diamond_fragment_how_to_get'
}

const brilliantDiamondChunk = {
  additional_info: 'brilliant_diamond_chunk_how_to_get'
}

const brilliantDiamondGemstone = {
  additional_info: 'brilliant_diamond_gemstone_how_to_get'
}

export const ExpandedMaterialInfo: IDungeon = {
  mora: {...LeyLineOutcropsBlossomOfWealth},
  heros_wit: {...LeyLineOutcropsBlossomOfRevelation},
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
  lightning_prism: {...ElectroHypostasis},
  everflame_seed: {...PyroRegisvine},
  cleansing_heart: {...Oceanid},
  juvenile_jade: {...PrimoGeovishap},
  basalt_pillar: {...GeoHypostasis},
  hoarfrost_core: {...CryoRegisvine},
  storm_beads: {...ThunderManifestation},
  marionette_core: {...MaguuKenki},
  crystalline_bloom: {...CryoHypostasis},
  perpetual_heart: {...PerpetualMechanicalArray},
  dew_of_repudiation: {...HydroHypostasis},
  smoldering_pearl: {...PyroHypostasis},
  crown_of_insight: {...crownOfInsight},
  brilliant_diamond_sliver: {...brilliantDiamondSliver},
  brilliant_diamond_fragment: {...brilliantDiamondFragment},
  brilliant_diamond_chunk: {...brilliantDiamondChunk},
  brilliant_diamond_gemstone: {...brilliantDiamondGemstone},
  riftborn_regalia: {...GoldenWolflord},
  dragonheirs_false_fin: {...BathysmalVishapHerd},
  the_meaning_of_aenos: {...EndOfTheOneiricEuthymia},
  tears_of_the_calamitous_god: {...EndOfTheOneiricEuthymia},
  mudra_of_the_malefic_general: {...EndOfTheOneiricEuthymia},
  runic_fang: {...RuinSerpent},
  thunderclap_fruitcore: {...ElectroRegisvine},
  majestic_hooked_beak: {...JadeplumeTerrorshroom},
  teachings_of_admonition: {...Admonition},
  guide_to_admonition: {...Admonition},
  philosophies_of_admonition: {...Admonition},
  teachings_of_praxis: {...Praxis},
  guide_to_praxis: {...Praxis},
  philosophies_of_praxis: {...Praxis},
  teachings_of_ingenuity: {...Ingenuity},
  guide_to_ingenuity: {...Ingenuity},
  philosophies_of_ingenuity: {...Ingenuity},
  light_guiding_tetrahedron: {...AlgorithmOfSemiIntransientMatrixOfOverseerNetwork},
  perpetual_caliber: {...aeonblightDrake},
}

// order is important
export const defaultTalentMaterials = {
  2: [
    {material: '', count: 3, sorting_index: 2},
    {material: '', count: 6, sorting_index: 5},
    {material: MORA, count: 12500, sorting_index: 1}
  ],
  3: [
    {material: '', count: 2, sorting_index: 3},
    {material: '', count: 3, sorting_index: 6},
    {material: MORA, count: 17500, sorting_index: 1}
  ],
  4: [
    {material: '', count: 4, sorting_index: 3},
    {material: '', count: 4, sorting_index: 6},
    {material: MORA, count: 25000, sorting_index: 1}
  ],
  5: [
    {material: '', count: 6, sorting_index: 3},
    {material: '', count: 6, sorting_index: 6},
    {material: MORA, count: 30000, sorting_index: 1}
  ],
  6: [
    {material: '', count: 9, sorting_index: 3},
    {material: '', count: 9, sorting_index: 6},
    {material: MORA, count: 37500, sorting_index: 1}
  ],
  7: [
    {material: '', count: 4, sorting_index: 4},
    {material: '', count: 4, sorting_index: 7},
    {material: '', count: 1, sorting_index: 8},
    {material: MORA, count: 120000, sorting_index: 1}
  ],
  8: [
    {material: '', count: 6, sorting_index: 4},
    {material: '', count: 6, sorting_index: 7},
    {material: '', count: 1, sorting_index: 8},
    {material: MORA, count: 260000, sorting_index: 1}
  ],
  9: [
    {material: '', count: 12, sorting_index: 4},
    {material: '', count: 9, sorting_index: 7},
    {material: '', count: 2, sorting_index: 8},
    {material: MORA, count: 450000, sorting_index: 1}
  ],
  10: [
    {material: '', count: 16, sorting_index: 4},
    {material: '', count: 12, sorting_index: 7},
    {material: '', count: 2, sorting_index: 8},
    {material: CROWN_OF_INSIGHT, count: 1},
    {material: MORA, count: 700000}
  ]
}

// order is important
export const defaultAscensionMaterials = {
  20: [
    { material: '', count: 1, sorting_index: 3 },
    { material: '', count: 3 },
    { material: '', count: 3, sorting_index: 7 },
    { material: MORA, count: 20000, sorting_index: 1 },
  ],
  40: [
    { material: '', count: 3, sorting_index: 4 },
    { material: '', count: 2 },
    { material: '', count: 10 },
    { material: '', count: 15, sorting_index: 7 },
    { material: MORA, count: 40000, sorting_index: 1 },
  ],
  50: [
    { material: '', count: 6, sorting_index: 4 },
    { material: '', count: 4 },
    { material: '', count: 20 },
    { material: '', count: 12, sorting_index: 8 },
    { material: MORA, count: 60000, sorting_index: 1 },
  ],
  60: [
    { material: '', count: 3, sorting_index: 5 },
    { material: '', count: 8 },
    { material: '', count: 30 },
    { material: '', count: 18, sorting_index: 8 },
    { material: MORA, count: 80000, sorting_index: 1 },
  ],
  70: [
    { material: '', count: 6, sorting_index: 5 },
    { material: '', count: 12 },
    { material: '', count: 45 },
    { material: '', count: 12, sorting_index: 9 },
    { material: MORA, count: 100000, sorting_index: 1 },
  ],
  80: [
    { material: '', count: 6, sorting_index: 6 },
    { material: '', count: 20 },
    { material: '', count: 60 },
    { material: '', count: 24, sorting_index: 9 },
    { material: MORA, count: 120000, sorting_index: 1 },
  ]
}
