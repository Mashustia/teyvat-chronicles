import {Character, Vision} from '../const/consts';

export interface ICharacter {
  name: string | Character
  vision: Vision
  ascension_materials: IAscensionMaterials
  rarity: number
  talent_materials?: IAscensionMaterials
  possible_teams?: Array<string[]>
  attack?: IAscensionMaterials
  elemental_skill?: IAscensionMaterials
  elemental_burst?: IAscensionMaterials
}

export interface ISearch {
  search_keys: string
  translated_name: string
}

export interface IAscensionMaterials {
  [key: number]: IMaterial[]
}

export interface IMaterial {
  material: string
  count: number
  sorting_index?: number
}

export interface IFarmingRoute {
  en?: string[]
  ru?: string[]
}

export interface IFarmingRoutes {
  [key: string]: IFarmingRoute
}
