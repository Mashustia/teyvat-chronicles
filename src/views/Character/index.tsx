import {FC, ReactElement} from 'react'
import {useParams} from 'react-router-dom';

import CharacterInformation from './components/CharacterInformation';
import {ScrollToTopOnMount} from '../../utils/utils';
import Container from '../../common/Container';
import {IRouteParams} from '../../types/commonTypes';

const Character: FC = (): ReactElement => {
  const { name } = useParams<IRouteParams>();
  return (
    <Container>
      <ScrollToTopOnMount name={name}/>
      <CharacterInformation/>
    </Container>
  )
}

export default Character
