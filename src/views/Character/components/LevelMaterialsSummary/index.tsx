import {FC, ReactElement} from 'react'
import {withRouter} from 'react-router-dom';

import {ILevelMaterialsSummaryProps as IProps} from './types';
import {calculateMaterials} from '../../../../utils/utils';

const LevelMaterialsSummary: FC<IProps> = ({match: {params}, startingLevel, finalLevel}): ReactElement => {

  const materialsNeeded = calculateMaterials(params.name, startingLevel, finalLevel)

  console.log(materialsNeeded)
  return (
    <div className=''>
    </div>
  )
}

export default withRouter(LevelMaterialsSummary)
