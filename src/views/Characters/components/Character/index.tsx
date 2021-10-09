import {FC} from 'react'
import {Col} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import CharacterImage from '../../../../common/CharacterImage';
import {ICharacter as IProps} from '../../../../charactersData/types';
import Stars from '../../../../common/Stars';

const Character: FC<IProps> = ({name, rarity}) => {
  const {t} = useTranslation();

  return (
    <Col xs={6} sm={3} md={3} lg={2} xl={2} xxl={1}>
      <CharacterImage name={name} withBorder={true} withLink={true}/>
      <h4 className='d-flex justify-content-center mb-0'>{t(`character:names.${name}`)}</h4>
      <div className='mb-3'>{<Stars count={rarity}/>}</div>
    </Col>
  )
}

export default Character
