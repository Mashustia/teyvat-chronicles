import {FC, ReactElement} from 'react'
import {withRouter} from 'react-router-dom';

import './Container.css'

const Container: FC = ({ children}): ReactElement => (
  <div className='layout-container'>{children}</div>
)

export default withRouter(Container)
