import {FC} from 'react'

import Header from '../Header';
import Container from '../../common/Container';
import Characters from '../Characters/components/Characters';

const Layout: FC = () => {
  return (
    <Container>
      <Header/>
      <Characters/>
    </Container>
  )
}

export default Layout
