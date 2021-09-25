import { FC } from 'react'
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Col, Row, Container} from 'react-bootstrap';

import {ICharacterProps as IProps} from './types';

const Character: FC<IProps> = ({ match: {params}}) => {
  const { t } = useTranslation();
  const { name } = params
  const imagePath = `/images/characters/${name}.png`

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={2}>
          <img src={imagePath} alt={name} className='character-img' />
          <h1>{t(`character:names.${name}`)}</h1>
        </Col>
        <Col xs={12} md={10}>
          <h4>{t('character:ascension_materials')}</h4>
          <Row>
            <Col xs={2}>1</Col>
            <Col xs={10}>2</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(Character)
