import {FC} from 'react'
import {Container} from 'react-bootstrap';

import Header from '../Header';
import Characters from '../Characters/components/Characters';

const Layout: FC = () => {
  return (
      <Container fluid>
        <Header/>

        <Characters/>
      </Container>
  )
}

export default Layout
