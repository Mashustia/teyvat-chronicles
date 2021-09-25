import { FC } from 'react'
import {withRouter} from 'react-router-dom';

import {ICharacterProps as IProps} from './types';

const Character: FC<IProps> = ({ match: {params}}) => {
  return (
    <div>
      <h1>{params.name}</h1>
    </div>
  )
}

export default withRouter(Character)
