import {FC} from 'react'

import Header from '../Header';
import CharactersWrapper from '../Characters/components/CharactersWrapper';
import Container from '../../common/Container';
import CharactersStore from '../../store/modules/characters/characters';

const Layout: FC = () => {
  return (
    <Container>
      <Header/>
      {/*@ts-ignore*/}
      <CharactersWrapper charactersStore={CharactersStore}/>
    </Container>
  )
}

export default Layout
