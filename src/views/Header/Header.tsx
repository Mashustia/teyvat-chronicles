import {FC} from 'react'
import {Col, Container, Row} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

const Header: FC = (props) => {
  const { t } = useTranslation();

  return (
    <header className='mb-3'>
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className='h1'>
              {t('header:welcome')}
            </h1>
          </Col>
          <Col xs={12} className='fs-5'>{t('header:choose_character')}</Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
