import {FC, ReactElement} from 'react'
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Col} from 'react-bootstrap';

import {ILevelMaterialsSummaryProps as IProps} from './types';
import {calculateMaterials} from '../../../../utils/utils';
import Material from '../Material';

const LevelMaterialsSummary: FC<IProps> = ({match: {params}, startingLevel, finalLevel}): ReactElement => {
  const {t} = useTranslation('common');

  const materialsNeeded = calculateMaterials(params.name, startingLevel, finalLevel)

  return (
    <Col xs={12}>
      <Material data={[t('common:total'), materialsNeeded]} isSummary={true}/>
    </Col>
  )
}

export default withRouter(LevelMaterialsSummary)
