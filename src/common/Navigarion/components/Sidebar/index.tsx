import {FC, ReactElement} from 'react'

import './Sidebar.css'
import {ISidebarProps as IProps} from './types';

const Sidebar: FC<IProps> = ({ children, innerRef}): ReactElement => {

  return (
    <div className='d-flex flex-column fixed sidebar pt-2' ref={innerRef}>
      {children}
    </div>
  )
}

export default Sidebar
