import {FC} from 'react'
import {Container} from 'react-bootstrap';

import Header from '../Header';
import CharactersWrapper from '../Characters/components/CharactersWrapper';

const Layout: FC = () => {
  return (
      <Container fluid>
        <Header/>

        <CharactersWrapper/>
      </Container>
  )
}

export default Layout
