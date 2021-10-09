import {RouteComponentProps} from 'react-router-dom';

import {IRouteParams} from '../../types/commonTypes';

export interface ICharacterImageProps extends RouteComponentProps<IRouteParams> {
  name: string
  withBorder?: boolean
  withLink?: boolean
}
