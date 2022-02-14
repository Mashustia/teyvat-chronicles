import {FC, ReactElement} from 'react'
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {ILevelMaterialsSummaryProps as IProps} from './types';
import {calculateMaterials} from '../../../../utils/utils';
import Material from '../Material';

const LevelMaterialsSummary: FC<IProps> = ({match: {params}, startingLevel, finalLevel}): ReactElement => {
  const {t} = useTranslation(['common', 'material']);

  const materialsNeeded = calculateMaterials(params.name, startingLevel, finalLevel)

  const isMaterialsSummaryShown = !((startingLevel.lvl === finalLevel.lvl) && (startingLevel.isAscended === finalLevel.isAscended))

  return (
    <div>
      {isMaterialsSummaryShown ?
        (
          <Material data={[materialsNeeded]}/>
        ) :
        (
          <div className='align-items-center gx-3 gy-2 table-border my-3 ascension-material'>
            <p className='my-5 fs-5'>{t('material:materials_are_not_required')}</p>
          </div>
        )
      }
    </div>
  )
}

export default withRouter(LevelMaterialsSummary)
