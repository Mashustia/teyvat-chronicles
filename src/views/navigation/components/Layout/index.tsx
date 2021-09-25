import {FC} from 'react'
import {Container} from 'react-bootstrap';
import Characters from '../Characters';

import Header from '../Header/Header';

const Layout: FC = () => {
  return (
    <Container>
      <Header/>

      <Characters/>
    </Container>
  )
}

export default Layout
