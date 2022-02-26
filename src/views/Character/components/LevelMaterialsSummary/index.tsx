import {FC, ReactElement} from 'react'
import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';

import {ILevelMaterialsSummaryProps as IProps} from './types';
import {calculateMaterials} from '../../../../utils/utils';
import Material from '../Material';
import {IRouteParams} from '../../../../types/commonTypes';

const LevelMaterialsSummary: FC<IProps> = ({startingLevel, finalLevel}): ReactElement => {
  const {t} = useTranslation(['common', 'material']);
  const { name } = useParams<IRouteParams>();

  const materialsNeeded = name ? calculateMaterials(name, startingLevel, finalLevel) : []

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

export default LevelMaterialsSummary
