import {FC, ReactElement} from 'react'

import './Sidebar.css'
import {ISidebarProps as IProps} from './types';

const Sidebar: FC<IProps> = ({ children, innerRef}): ReactElement => {

  return (
    <ul className='list-unstyled d-flex flex-column fixed sidebar pt-2' ref={innerRef}>
      {children}
    </ul>
  )
}

export default Sidebar
