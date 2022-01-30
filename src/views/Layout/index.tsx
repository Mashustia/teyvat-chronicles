import {FC} from 'react'

import Header from '../Header';
import CharactersWrapper from '../Characters/components/CharactersWrapper';
import Container from '../../common/Container';

const Layout: FC = () => {
  return (
      <Container>
        <Header/>

        <CharactersWrapper/>
      </Container>
  )
}

export default Layout
