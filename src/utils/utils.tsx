import {useEffect} from 'react';
import {cloneDeep, groupBy, sortBy} from 'lodash'
import {TFunction} from 'react-i18next';

import {defaultAscensionMaterials, defaultTalentMaterials} from '../charactersData/materials/expandedMaterialInfo';
import {
  IBooksAndMoraForLevel,
  ICalculatedExperience,
  ICharacterAscensionMaterials,
  ICharacterTalentMaterials
} from './types';
import {IAscensionMaterials, ICharacter, ILevel, IMaterial} from '../charactersData/types';
import {characterExperience, HEROS_WIT_EXP as HEROS_WIT_EXP_QUANTITY} from '../charactersData/common';
import CHARACTERS from '../charactersData';
import {COUNT, Languages, MATERIAL, SORTING_INDEX} from '../const/consts';
import {HEROS_WIT, MORA} from '../charactersData/materials/materialNames';
import {IAscensionSummary} from '../views/Character/components/AscensionSummary/types';
import {ICharacterProps as ICharacterWithSearchKeys} from '../views/Characters/components/Character/types';

export const ScrollToTopOnMount = ({name}: { name?: string | undefined }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  return null;
}

export const fillTalentMaterials = (
  {
    books,
    materials,
    bossMaterial
  }: ICharacterTalentMaterials
): IAscensionMaterials => {
  const talentMaterials = cloneDeep(defaultTalentMaterials)

  // lvl 2
  talentMaterials[2][0].material = books[1]
  talentMaterials[2][1].material = materials[1]

  // lvl 3, 4, 5, 6
  const lvl2Materials = [3, 4, 5, 6]
  lvl2Materials.forEach((lvl: number) => {
      talentMaterials[lvl][0].material = books[2]
      talentMaterials[lvl][1].material = materials[2]
    }
  )

  // lvl 7, 8, 9, 10
  const lvl3Materials = [7, 8, 9, 10]
  lvl3Materials.forEach((lvl: number) => {
      talentMaterials[lvl][0].material = books[3]
      talentMaterials[lvl][1].material = materials[3]
      talentMaterials[lvl][2].material = bossMaterial
    }
  )

  return talentMaterials
}


export const fillAscensionMaterials = (
  {
    gems,
    materials,
    bossMaterial,
    specialty
  }: ICharacterAscensionMaterials
): IAscensionMaterials => {
  const ascensionMaterials = cloneDeep(defaultAscensionMaterials)

  // specialties
  const common = [20, 40, 50, 60, 70, 80]
  common.forEach((lvl: number) => {
    if (lvl === 20) {
      ascensionMaterials[lvl][1].material = specialty
    } else {
      ascensionMaterials[lvl][1].material = bossMaterial
      ascensionMaterials[lvl][2].material = specialty
    }
  })

  // lvl 20
  ascensionMaterials[20][0].material = gems[1]
  ascensionMaterials[20][2].material = materials[1]

  // lvl 40, 50
  const lvl40And50Materials = [40, 50]
  lvl40And50Materials.forEach((lvl: number) => {
      ascensionMaterials[lvl][0].material = gems[2]
      ascensionMaterials[lvl][3].material = lvl === 40 ? materials[1] : materials[2]
    }
  )

  // lvl 60, 70
  const lvl60And70Materials = [60, 70]
  lvl60And70Materials.forEach((lvl: number) => {
      ascensionMaterials[lvl][0].material = gems[3]
      ascensionMaterials[lvl][3].material = lvl === 60 ? materials[2] : materials[3]
    }
  )

  // lvl 80
  ascensionMaterials[80][0].material = gems[4]
  ascensionMaterials[80][3].material = materials[3]

  if (!bossMaterial) {
    common.forEach((level: number) => {
        if (level !== 20) {
          ascensionMaterials[level].splice(1, 1)
        }
      }
    )
  }

  return ascensionMaterials
}

export const calculateExperience = (startingLevel: ILevel, finalLevel: ILevel): IBooksAndMoraForLevel => {
  const expLevels = Object.keys(characterExperience)

  const expNeeded = expLevels.reduce((accumulator: ICalculatedExperience, currentValue: string): ICalculatedExperience => {
    if (parseInt(currentValue) <= startingLevel.lvl) return accumulator
    if (parseInt(currentValue) > finalLevel.lvl) return accumulator

    accumulator.exp = accumulator.exp + characterExperience[currentValue].exp_needed
    accumulator.mora = accumulator.mora + characterExperience[currentValue].mora

    return accumulator
  }, {exp: 0, mora: 0})

  const booksCount = Math.ceil(expNeeded.exp / HEROS_WIT_EXP_QUANTITY)

  return {books: booksCount, mora: expNeeded.mora}
}

export const getAscensionMaterialsSummary = (ascensionMaterials: IAscensionMaterials): IMaterial[] => {
  const getAscensionMaterialsSummary = () => Object.values(ascensionMaterials).flat()

  const ascensionMaterialsSummary = getAscensionMaterialsSummary()

  const materialGroupedByName = groupBy(ascensionMaterialsSummary, MATERIAL)
  const groupedMaterialKeys = Object.keys(materialGroupedByName)

  const materials: IMaterial[] = groupedMaterialKeys.reduce((accumulator: IMaterial[], currentValue: string) => {
    const counter: number = materialGroupedByName[currentValue].reduce((materialAccumulator: number, materialCurrentValue: IMaterial) => {
      return materialAccumulator + materialCurrentValue.count
    }, 0)

    const material: IMaterial = {
      material: currentValue,
      count: counter
    }

    const sortingIndex = materialGroupedByName[currentValue][0]?.sorting_index
    if (sortingIndex) {
      material[SORTING_INDEX] = sortingIndex
    }

    return [...accumulator, material]
  }, [])

  return materials
}

export const calculateMaterials = (characterName: string, startingLevel: ILevel, finalLevel: ILevel): IMaterial[] | [] => {
  const characterMaterials = CHARACTERS.find((character: ICharacter) => character.name === characterName)?.ascension_materials

  if (characterMaterials) {
    const materialLevels = Object.keys(characterMaterials)

    const materialsNeeded: IAscensionMaterials = {}

    materialLevels.forEach((materialLevel: string) => {
      if (parseInt(materialLevel) < startingLevel.lvl) return
      if ((parseInt(materialLevel) === startingLevel.lvl) && startingLevel.isAscended) return
      if ((parseInt(materialLevel) === finalLevel.lvl) && !finalLevel.isAscended) return
      if (parseInt(materialLevel) > finalLevel.lvl) return

      materialsNeeded[materialLevel] = characterMaterials[materialLevel]

    }, [])

    const ascensionMaterialsSummary: IMaterial[] = getAscensionMaterialsSummary(materialsNeeded)
    const booksSummary = calculateExperience(startingLevel, finalLevel)

    const overallSummary: IMaterial[] = [...ascensionMaterialsSummary, {
      material: HEROS_WIT,
      count: booksSummary.books,
      sorting_index: 2
    }]

    const moraIndex = overallSummary.findIndex((material: IMaterial) => material.material === MORA)

    if (moraIndex !== -1) {
      overallSummary[moraIndex].count = overallSummary[moraIndex].count + booksSummary.mora
    } else {
      overallSummary.push({material: MORA, count: booksSummary.mora, sorting_index: 1})
    }

    return sortBy(overallSummary, [SORTING_INDEX, COUNT])
  }

  return []
}

export const getCumulativeMaterials = ({characterData, skillLevel, isTraveler}: IAscensionSummary): IMaterial[] => {
  const skills = Object.keys(skillLevel)

  const cumulativeMaterials: IMaterial[] = []

  skills.forEach((skill: string) => {
    const level = skillLevel[skill]

    let talentMaterials: IAscensionMaterials = {}

    if (isTraveler) talentMaterials = characterData[skill]

    if (!isTraveler && characterData?.talent_materials) talentMaterials = characterData.talent_materials

    return Object.keys(talentMaterials).forEach((skillLevel: string) => {
      if (skillLevel > level.from && skillLevel <= level.to) {
        return cumulativeMaterials.push(...talentMaterials[skillLevel])
      }
      return
    })
  })

  return cumulativeMaterials
}

export const getGroupedMaterials = (materials: IMaterial[]): IMaterial[] => {
  const materialGroupedByName = groupBy(materials, MATERIAL)
  const groupedMaterialKeys = Object.keys(materialGroupedByName)

  return groupedMaterialKeys.reduce((accumulator: IMaterial[], currentValue: string) => {
    const counter: number = materialGroupedByName[currentValue].reduce((materialAccumulator: number, materialCurrentValue: IMaterial) => {
      return materialAccumulator + materialCurrentValue.count
    }, 0)

    const material: IMaterial = {
      material: currentValue,
      count: counter,
    }

    const sortingIndex = materialGroupedByName[currentValue][0]?.sorting_index
    if (sortingIndex) {
      material[SORTING_INDEX] = sortingIndex
    }

    return [...accumulator, material]
  }, [])
}

export const getCharactersWithTranslatedNames = (charactersList: ICharacter[], t: TFunction): ICharacterWithSearchKeys[] =>
  charactersList.map((character: ICharacter) => {
    const {name, vision} = character
    return ({
      ...character,
      search_keys: (`${
        t(`character:names.${name}`, {lng: Languages.EN})
      } ${
        t(`character:names.${name}`, {lng: Languages.RU})
      } ${
        t(`character:vision.${vision}`, {lng: Languages.EN})
      } ${
        t(`character:vision.${vision}`, {lng: Languages.RU}
        )}`).toLowerCase(),
      translated_name: t(`character:names.${name}`)
    })
  })
