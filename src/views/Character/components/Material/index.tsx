import {FC, useState} from 'react'
import {Alert, Col, Row} from 'react-bootstrap';
import {Img} from 'react-image';
import {useTranslation} from 'react-i18next';

import {ITableItemProps as IProps} from './types';
import {IMaterial} from '../../../../charactersData/types';
import './Material.css'
import {ReactComponent as Skeleton} from '../MaterialSkeleton/MaterialSkeleton.svg';
import {materialLink} from '../../../../charactersData/interactiveMapLinks';
import {interactiveMapBaseUrl, InteractiveMapLanguage} from '../../../../const/consts';

const Material: FC<IProps> = ({data: [lvl, materials]}) => {
  const {i18n, t} = useTranslation(['materials', 'material'])
  const [isAdditionalInfoShown, toggleAdditionalInfo] = useState(false)
  const [activeMaterial, toggleMaterial] = useState('')

  const handleMaterialToggle = (material: string) => () => {
    toggleAdditionalInfo(true)
    toggleMaterial(material)
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
  console.log(interactiveMapLink)

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
          className='ascension-material-alert'
        >
          <Alert.Heading className='fs-5'>{materialName}</Alert.Heading>

          <a href={interactiveMapLink} target='_blank' rel='noreferrer' className='link'>{t('material:interactive_map')}</a>
        </Alert>
      </Col>
    </Row>
  )
}

export default Material
