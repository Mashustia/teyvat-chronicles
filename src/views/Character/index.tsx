import {FC, ReactElement, useEffect} from 'react'
import {Container} from 'react-bootstrap';

import Header from './components/Header';
import Materials from './components/Materials';

const Character: FC = (): ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <Header/>
      <Materials/>
    </Container>
  )
}

export default Character
