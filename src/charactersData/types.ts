import {Vision} from '../const/consts';

export interface ICharacter {
  name: string
  vision: Vision
  ascension_materials: IAscensionMaterials
  rarity: number
  talent_materials?: IAscensionMaterials
}

export interface IAscensionMaterials {
  [key: number]: IMaterial[]
}

export interface IMaterial {
  material: string
  count: number
}
