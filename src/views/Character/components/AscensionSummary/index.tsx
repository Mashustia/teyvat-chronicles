import {FC, ReactElement} from 'react'
import {useTranslation} from 'react-i18next';
import { groupBy, sortBy } from 'lodash';

import Material from '../Material';
import {IAscensionSummary} from './types';
import {IMaterial} from '../../../../charactersData/types';

const MATERIAL = 'material'
const COUNT = 'count'

const AscensionSummary: FC<IAscensionSummary> = ({ ascensionMaterials }): ReactElement => {
  const {t} = useTranslation('common');

  const getAscensionMaterialsSummary = () => Object.values(ascensionMaterials)
    .reduce((accumulator, currentValue) => [...accumulator, ...currentValue], [])

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

    return [...accumulator, material]
  }, [])

  const sortedMaterials = sortBy(materials, COUNT)

  return <Material data={[t('common:total'), sortedMaterials]} isSummary={true}/>
}

export default AscensionSummary