import {FC, ReactElement} from 'react'
import { groupBy, sortBy } from 'lodash';

import {IAscensionSummary} from './types';
import {IAscensionMaterials, IMaterial} from '../../../../charactersData/types';
import MaterialReworked from '../Material/MaterialReworked';

const MATERIAL = 'material'
const SORTING_INDEX = 'sorting_index'
const COUNT = 'count'

const AscensionSummaryReworked: FC<IAscensionSummary> = ({ characterData, skillLevel, isTraveler}): ReactElement => {
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

  const materialGroupedByName = groupBy(cumulativeMaterials, MATERIAL)
  const groupedMaterialKeys = Object.keys(materialGroupedByName)

  const materials: IMaterial[] = groupedMaterialKeys.reduce((accumulator: IMaterial[], currentValue: string) => {
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

  const sortedMaterials = sortBy(materials, [SORTING_INDEX, COUNT])

  return sortedMaterials.length > 0 ? <MaterialReworked data={[sortedMaterials]}/> : <></>
}

export default AscensionSummaryReworked
