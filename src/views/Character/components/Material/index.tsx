import {FC, useState} from 'react'
import {Alert, Col, Row} from 'react-bootstrap';
import {Img} from 'react-image';
import {useTranslation} from 'react-i18next';

import {ITableItemProps as IProps} from './types';
import {IMaterial} from '../../../../charactersData/types';
import './Material.css'
import {ReactComponent as Skeleton} from '../MaterialSkeleton/MaterialSkeleton.svg';
import {ReactComponent as MaterialDetailsImageSkeleton} from '../MaterialDetailsImageSkeleton/MaterialDetailsImageSkeleton.svg';
import {materialLink} from '../../../../charactersData/interactiveMapLinks';
import {interactiveMapBaseUrl, InteractiveMapLanguage} from '../../../../const/consts';
import {Dungeon} from '../../../../charactersData/dungeons';

const Material: FC<IProps> = ({data: [lvl, materials]}) => {
  const {i18n, t} = useTranslation(['materials', 'material'])
  const [isAdditionalInfoShown, toggleAdditionalInfo] = useState(false)
  const [activeMaterial, toggleMaterial] = useState('')

  const handleMaterialToggle = (material: string) => () => {
    toggleMaterial(material)
    toggleAdditionalInfo(material === activeMaterial ? !isAdditionalInfoShown : true)
  }

  const rows = () => materials?.map(({material, count}: IMaterial, index: number) => {
    const imagePath = `/images/materials/${material}.png`

    const image = (
      <Img
        src={imagePath}
        alt={materialName}
        className='ascension-material-img'
        loader={<Skeleton/>}
        unloader={<Skeleton/>}
        onClick={handleMaterialToggle(material)}
      />
    )

    return (
      <Col key={index} className='d-flex flex-column'>
        <div className='ascension-material-img-wrapper mb-1'>
          {image}
        </div>
        <p className='mb-0 fs-6'>{count}</p>
      </Col>
    )
  })


  const getInteractiveMapLink = (materialLink: string): string => {
    if (materialLink) return `${interactiveMapBaseUrl.replace('{{ language }}', InteractiveMapLanguage[i18n.language])}${materialLink}`

    return ''
  }

  const interactiveMapLink: string = getInteractiveMapLink(materialLink[activeMaterial])

  const materialName = t(`materials:${activeMaterial}`)

  const materialDetails = Dungeon[activeMaterial] ?? undefined

  return (
    <Row className='align-items-center gx-3 gy-2 table-border mb-3'>
      <Col xs={1} className='fs-5'>{lvl}</Col>
      <Col xs={11}>
        <Row className='gx-1'>{rows()}</Row>
      </Col>

      <Col xs={12}>
        <Alert
          show={isAdditionalInfoShown}
          closeVariant='white'
          onClose={() => toggleAdditionalInfo(false)}
          dismissible
          className='ascension-material-alert px-3'
        >
          <Alert.Heading className='fs-5 mb-3'>{materialName}</Alert.Heading>

          {materialDetails && (
            <>
              <Row>
                <Col>
                  <p className='mb-0'>
                    <span className='fw-bold'>{t(`materials:${materialDetails.name}`)}</span>
                    {materialDetails.region && ` (${t(`materials:${materialDetails.region}`)})`}
                  </p>
                  <div className='d-flex justify-content-center align-items-center flex-nowrap'>
                    <p className='mb-0'>
                      {t('common:consumes')}: {materialDetails.original_resin}
                    </p>

                    <Img
                      src={'/images/materials/original_resin.png'}
                      alt={t('materials:original_resin')}
                      className='ascension-material-resin-image'
                    />
                  </div>
                  <p className='mb-1'>
                    {t('common:dungeon_days')}
                    {materialDetails.is_open_days.map((day: string, index: number) =>
                      `${t(`common:${day}`)}${index + 1 !== materialDetails.is_open_days.length ? ', ' : ''}`
                    )}
                  </p>
                </Col>
                <Col>
                  <Img
                    src={`/images/dungeons/${materialDetails.name}.png`}
                    alt={t(`materials:${materialDetails.name}`)}
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
    </Row>
  )
}

export default Material
