import {FC} from 'react'
import {Col, Row} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

const Header: FC = (props) => {
  const { t } = useTranslation();

  return (
    <header className='mb-2'>
      <Row>
        <Col>
          <h1 className='h1'>
            {t('header:welcome')}
          </h1>
        </Col>
      </Row>
    </header>
  )
}

export default Header
