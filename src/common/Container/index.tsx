import {FC, ReactElement} from 'react'

import './Container.css'

const Container: FC = ({ children}): ReactElement => (
  <div className='layout-container'>{children}</div>
)

export default Container
