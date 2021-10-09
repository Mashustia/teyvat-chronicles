import {FC, ReactElement} from 'react'
import {Container} from 'react-bootstrap';

import Materials from './components/Materials';

const Character: FC = (): ReactElement => (
  <Container>
    <Materials/>
  </Container>
)

export default Character
