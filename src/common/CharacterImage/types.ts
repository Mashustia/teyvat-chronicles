import {RouteComponentProps} from 'react-router-dom';

import {IRouteParams} from '../../types/commonTypes';
import {Character} from '../../const/consts';

export interface ICharacterImageProps extends RouteComponentProps<IRouteParams> {
  name: string | Character
  withBorder?: boolean
  withLink?: boolean
}
