import {RouteComponentProps} from 'react-router-dom';

import {ILevel} from '../../../../charactersData/types';
import {IRouteParams} from '../../../../types/commonTypes';

export interface ILevelMaterialsSummaryProps extends RouteComponentProps<IRouteParams> {
  startingLevel: ILevel
  finalLevel: ILevel
}
