import {FC, PropsWithChildren, ReactElement} from 'react'

import './Container.css'

const Container: FC<PropsWithChildren> = ({children}): ReactElement => (
  <div className='layout-container'>{children}</div>
)

export default Container
