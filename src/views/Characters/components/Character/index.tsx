import {FC} from 'react'
import {Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {ICharacterProps as IProps} from './types';
import {createUrl} from '../../../../utils/utils';
import CharacterImage from '../CharacterImage';

const Character: FC<IProps> = ({name, history, match}) => {
  const {t} = useTranslation();
  const handleCharacterClick = () => history.push(createUrl(match, name))

  return (
    <Col xs={6} sm={3} md={3} lg={2} xl={2} xxl={1} className='pointer' onClick={handleCharacterClick}>
      <CharacterImage name={name} withBorder={true}/>
      <h4>{t(`character:names.${name}`)}</h4>
    </Col>
  )
}

export default withRouter(Character)
