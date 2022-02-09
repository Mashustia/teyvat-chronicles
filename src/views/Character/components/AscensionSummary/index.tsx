import {FC, ReactElement} from 'react'
import { sortBy } from 'lodash';

import {IAscensionSummary} from './types';
import {IMaterial} from '../../../../charactersData/types';
import Material from '../Material/Material';
import {getCumulativeMaterials, getGroupedMaterials} from '../../../../utils/utils';
import {COUNT, SORTING_INDEX} from '../../../../const/consts';

const AscensionSummary: FC<IAscensionSummary> = (props): ReactElement => {
  const cumulativeMaterials: IMaterial[] = getCumulativeMaterials(props)

  const materials: IMaterial[] = getGroupedMaterials(cumulativeMaterials)

  const sortedMaterials = sortBy(materials, [SORTING_INDEX, COUNT])

  return sortedMaterials.length > 0 ? <Material data={[sortedMaterials]}/> : <></>
}

export default AscensionSummary
