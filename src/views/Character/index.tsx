import {FC, ReactElement} from 'react'
import {Container} from 'react-bootstrap';

import CharacterInformation from './components/CharacterInformation';
import {ScrollToTopOnMount} from '../../utils/utils';

const Character: FC = (): ReactElement => (
  <Container>
    <ScrollToTopOnMount/>
    <CharacterInformation/>
  </Container>
)

export default Character
