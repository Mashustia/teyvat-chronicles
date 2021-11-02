import {FC, ReactElement} from 'react'
import {Container} from 'react-bootstrap';

import Materials from './components/Materials';
import {ScrollToTopOnMount} from '../../utils/utils';

const Character: FC = (): ReactElement => (
  <Container>
    <ScrollToTopOnMount/>
    <Materials/>
  </Container>
)

export default Character
