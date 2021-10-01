import {FC, ReactElement, useEffect} from 'react'
import {Container} from 'react-bootstrap';

import Header from './components/Header';
import AscensionMaterials from './components/AscensionMaterials';

const Character: FC = (): ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <Header/>
      <AscensionMaterials/>
    </Container>
  )
}

export default Character
