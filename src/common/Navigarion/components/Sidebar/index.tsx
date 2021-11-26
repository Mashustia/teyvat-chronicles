import {FC, ReactElement} from 'react'

import './Sidebar.css'

const Sidebar: FC = ({ children }): ReactElement => (
  <ul className='list-unstyled d-flex flex-column fixed sidebar px-2 pt-2'>
    {children}
  </ul>
)

export default Sidebar
