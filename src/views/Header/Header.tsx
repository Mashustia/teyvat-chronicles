import {FC} from 'react'
import {Col, Row} from 'react-bootstrap';
import {withTranslation, WithTranslation} from 'react-i18next';

const Header: FC<WithTranslation> = (props) => {
  const { t, i18n } = props;
  console.log(i18n, i18n.language)

  return (
    <header>
      <Row>
        <Col>
          <h1 className='h1 pt-2'>
            {t('header:welcome')}
          </h1>
        </Col>
      </Row>
    </header>
  )
}

export default withTranslation('header')(Header)
