import {FC} from 'react'
import {observer} from 'mobx-react-lite';

import Characters from '../Characters';

const CharactersWrapper: FC = observer(() => {
  return <Characters/>
})

export default CharactersWrapper
