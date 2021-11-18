import {match} from 'react-router-dom';
import {useEffect} from 'react';
import {cloneDeep} from 'lodash'

import {IRouteParams} from '../types/commonTypes';
import {defaultTalentMaterials} from '../charactersData/expandedMaterialInfo';
import {ICharacterTalentMaterials} from './types';
import {IAscensionMaterials} from '../charactersData/types';

export const getOrgDataFromMatch = (matchData: match<IRouteParams>): string => {
  if (matchData?.params?.name) {
    return `/${matchData.params.name}`
  }

  return ''
}

export const createUrl = (urlData: match<IRouteParams> | string, ...rest: Array<string | number>): string => {
  const org = typeof urlData === 'string' ? `/${urlData}` : getOrgDataFromMatch(urlData)

  return (
    org +
    rest.reduce((accumulator: string, currentValue: string | number) => {
      if (!currentValue) return accumulator

      const newCurrentValue =
        typeof currentValue !== 'number' && !currentValue.includes('/') && accumulator.slice(-1) !== '/'
          ? `/${currentValue}`
          : currentValue
      return `${accumulator}${newCurrentValue}`
    }, '')
  )
}

export const ScrollToTopOnMount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export const fillTalentMaterials = ({ books, materials, bossMaterial }: ICharacterTalentMaterials): IAscensionMaterials => {
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
