import {RouteComponentProps} from 'react-router-dom';

import {IRouteParams} from '../../../../types/commonTypes';
import {ICharacter} from '../../../../charactersData/types';

export type ICharacterProps = RouteComponentProps<IRouteParams> & ICharacter
