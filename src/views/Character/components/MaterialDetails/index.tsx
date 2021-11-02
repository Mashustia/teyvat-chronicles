import {FC} from 'react'
import {Alert, Col, Row} from 'react-bootstrap';
import {Img} from 'react-image';
import {useTranslation} from 'react-i18next';

import {IMaterialDetailsProps as IProps} from './types';
import {genshinImpactMap, materialLink} from '../../../../charactersData/interactiveMapLinks';
import {interactiveMapBaseUrl, InteractiveMapLanguage, WeekDay} from '../../../../const/consts';
import './MaterialDetails.css'
import Map from '../../../../common/Map';

const MaterialDetails: FC<IProps> = (props) => {
  const {t, i18n} = useTranslation(['materials', 'material'])
  const {
    activeMaterial,
    isAdditionalInfoShown,
    toggleAdditionalInfo,
    name,
    region,
    original_resin,
    is_open_days,
    map_link,
    has_image
  } = props

  const getInteractiveMapLink = (materialLink: string): string => {
    if (materialLink) return `${interactiveMapBaseUrl.replace('{{ language }}', InteractiveMapLanguage[i18n.language])}${materialLink}`

    return ''
  }

  const interactiveMapLink: string = getInteractiveMapLink(materialLink[activeMaterial])

  const materialName = t(`materials:${activeMaterial}`)

  const materialEmbeddedMapLink: string | undefined = genshinImpactMap[activeMaterial]

  return (
    <Col xs={12}>
      <Alert
        show={isAdditionalInfoShown}
        closeVariant='white'
        onClose={() => toggleAdditionalInfo(false)}
        dismissible
        className='material-details-alert px-3'
      >
        <Alert.Heading className='fs-5 mb-3'>{materialName}</Alert.Heading>

        {(activeMaterial && name) ? (
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
                    className='material-details-resin-image'
                  />
                </div>
                <p className='mb-1'>
                  {t('common:dungeon_days')}
                  {is_open_days.map((day: WeekDay, index: number) =>
                    `${t(`common:${day}`)}${index + 1 !== is_open_days.length ? ', ' : ''}`
                  )}
                </p>
                {map_link && <Map name={name} map_link={map_link}/>}
                {has_image && (
                  <img
                    src={`/images/dungeons/${name}.png`}
                    alt={t(`materials:${name}`)}
                    className='material-details-image'
                  />
                )}
              </Col>

            </Row>
          </>
        ) : null}

        {materialEmbeddedMapLink && <Map name={activeMaterial} map_link={materialEmbeddedMapLink}/>}

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
