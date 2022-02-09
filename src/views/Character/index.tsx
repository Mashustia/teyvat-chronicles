import {FC, ReactElement} from 'react'

import CharacterInformation from './components/CharacterInformation';
import {ScrollToTopOnMount} from '../../utils/utils';
import Container from '../../common/Container';

const Character: FC = (): ReactElement => (
  <Container>
    <ScrollToTopOnMount/>
    <CharacterInformation/>
  </Container>
)

export default Character
