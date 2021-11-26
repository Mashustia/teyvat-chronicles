import {FC, ReactElement} from 'react'
import {Col, Container, Row} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {Timeline} from 'react-twitter-widgets'

import {ScrollToTopOnMount} from '../../utils/utils';
import {GenshinImpactTwitter} from '../../const/consts';

const News: FC = (): ReactElement => {
  const {i18n, t} = useTranslation('common')

  return (
    <Container>
      <ScrollToTopOnMount/>
      <Row className='justify-content-center'>
        <Col sm={12} md={12} lg={8} xl={7} xxl={6}>
          <h1 className='fs-3 mb-2'>{t('common:news', {twitter_name: GenshinImpactTwitter[i18n.language]})}</h1>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: GenshinImpactTwitter[i18n.language]
            }}
            options={{theme: 'dark'}}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default News
