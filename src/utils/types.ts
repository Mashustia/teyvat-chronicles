export interface ICharacterTalentMaterials {
  books: {
    1: string
    2: string
    3: string
  },
  materials: {
    1: string
    2: string
    3: string
  },
  bossMaterial: string
}

export interface ICharacterAscensionMaterials {
  gems: {
    1: string
    2: string
    3: string
    4: string
  },
  materials: {
    1: string
    2: string
    3: string
  },
  bossMaterial?: string
  specialty: string
}

export interface ICalculatedExperience {
  exp: number
  mora: number
}

export interface IBooksAndMoraForLevel {
  books: number
  mora: number
}
