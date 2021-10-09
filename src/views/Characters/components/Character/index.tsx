import {FC} from 'react'
import {Col} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import CharacterImage from '../../../../common/CharacterImage';
import {ICharacter as IProps} from '../../../../charactersData/types';

const Character: FC<IProps> = ({name}) => {
  const {t} = useTranslation();

  return (
    <Col xs={6} sm={3} md={3} lg={2} xl={2} xxl={1}>
      <CharacterImage name={name} withBorder={true} withLink={true}/>
      <h4 className='d-flex justify-content-center'>{t(`character:names.${name}`)}</h4>
    </Col>
  )
}

export default Character
