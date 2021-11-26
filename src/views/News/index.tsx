import {FC, ReactElement} from 'react'
import {Col, Container, Row} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import {ScrollToTopOnMount} from '../../utils/utils';
import {GenshinImpactTwitter, twitterUrl} from '../../const/consts';

const News: FC = (): ReactElement => {
  const {i18n, t} = useTranslation('common')
  // const [genshinTwitterUrl, setTwitterURl] = useState(twitterUrl.replace('{{ twitterName }}', GenshinImpactTwitter[i18n.language]));
  console.log(i18n.language)

  // useEffect(() => {
  //   return setTwitterURl(twitterUrl.replace('{{ twitterName }}', GenshinImpactTwitter[i18n.language]))
  // }, [i18n])

  const renderGenshinTwitter = (language: string): ReactElement => (
    <a
      className='twitter-timeline'
      data-theme='dark'
      href={twitterUrl.replace('{{ twitterName }}', GenshinImpactTwitter[language])}
    >
      {t('common:news')}
    </a>
  )

  return (
    <Container>
      <ScrollToTopOnMount/>

      <Row className='justify-content-center'>
        <Col sm={12} md={12} lg={8} xl={7} xxl={6}>
          <h1 className='fs-3 mb-2'>{t('common:news', { twitter_name: GenshinImpactTwitter[i18n.language]} )}</h1>
          {renderGenshinTwitter(i18n.language)}
        </Col>
      </Row>
    </Container>
  )
}

export default News
