import {FC} from 'react'
import {Alert, Col, Row} from 'react-bootstrap';
import {Img} from 'react-image';
import {useTranslation} from 'react-i18next';

import {IMaterialDetailsProps as IProps} from './types';
import {ReactComponent as MaterialDetailsImageSkeleton} from '../MaterialDetailsImageSkeleton/MaterialDetailsImageSkeleton.svg';
import {materialLink} from '../../../../charactersData/interactiveMapLinks';
import {interactiveMapBaseUrl, InteractiveMapLanguage, WeekDay} from '../../../../const/consts';

const MaterialDetails: FC<IProps> = ({
  activeMaterial,
  isAdditionalInfoShown,
  toggleAdditionalInfo,
  name,
  region,
  original_resin,
  is_open_days
}) => {
  const {t, i18n} = useTranslation(['materials', 'material'])

  const getInteractiveMapLink = (materialLink: string): string => {
    if (materialLink) return `${interactiveMapBaseUrl.replace('{{ language }}', InteractiveMapLanguage[i18n.language])}${materialLink}`

    return ''
  }

  const interactiveMapLink: string = getInteractiveMapLink(materialLink[activeMaterial])

  const materialName = t(`materials:${activeMaterial}`)
  console.log(activeMaterial)

  return (
    <Col xs={12}>
      <Alert
        show={isAdditionalInfoShown}
        closeVariant='white'
        onClose={() => toggleAdditionalInfo(false)}
        dismissible
        className='ascension-material-alert px-3'
      >
        <Alert.Heading className='fs-5 mb-3'>{materialName}</Alert.Heading>

        {(activeMaterial && name) && (
          <>
            <Row>
              <Col>
                <p className='mb-0'>
                  <span className='fw-bold'>{t(`materials:${name}`)}</span>
                  {region && ` (${t(`materials:${region}`)})`}
                </p>
                <div className='d-flex justify-content-center align-items-center flex-nowrap'>
                  <p className='mb-0'>
                    {t('common:consumes')}: {original_resin}
                  </p>

                  <Img
                    src={'/images/materials/original_resin.png'}
                    alt={t('materials:original_resin')}
                    className='ascension-material-resin-image'
                  />
                </div>
                <p className='mb-1'>
                  {t('common:dungeon_days')}
                  {is_open_days.map((day: WeekDay, index: number) =>
                    `${t(`common:${day}`)}${index + 1 !== is_open_days.length ? ', ' : ''}`
                  )}
                </p>
              </Col>
              <Col>
                <Img
                  src={`/images/dungeons/${name}.png`}
                  alt={t(`materials:${name}`)}
                  className='ascension-material-material-details-image'
                  loader={<MaterialDetailsImageSkeleton/>}
                  unloader={<MaterialDetailsImageSkeleton/>}
                />
              </Col>

            </Row>
          </>
        )}

        {interactiveMapLink && (
          <a
            href={interactiveMapLink}
            target='_blank'
            rel='noreferrer'
            className='link'
          >{t('material:interactive_map')}</a>
        )}
      </Alert>
    </Col>
  )
}

export default MaterialDetails
