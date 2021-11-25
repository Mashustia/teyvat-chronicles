import {FC, useState} from 'react'
import {Col, Row} from 'react-bootstrap';
import {Img} from 'react-image';
import {useTranslation} from 'react-i18next';

import {ITableItemProps as IProps} from './types';
import {IMaterial} from '../../../../charactersData/types';
import './Material.css'
import {ReactComponent as Skeleton} from '../MaterialSkeleton/MaterialSkeleton.svg';
import {ExpandedMaterialInfo} from '../../../../charactersData/expandedMaterialInfo';
import MaterialDetails from '../MaterialDetails';

const Material: FC<IProps> = ({data: [lvl, materials], isSummary}) => {
  const {t} = useTranslation(['materials', 'material'])
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

    return material && (
      <Col key={index} className='d-flex flex-column' xs={isSummary ? 2 : undefined}>
        <div className='ascension-material-img-wrapper mb-1'>
          {image}
        </div>
        <p className='mb-0 fs-6'>{count}</p>
      </Col>
    )
  })

  const materialName = t(`materials:${activeMaterial}`)

  const materialDetails = ExpandedMaterialInfo[activeMaterial] ?? undefined

  return (
    <Row className='align-items-center gx-3 gy-2 table-border mb-3 ascension-material'>
      <Col xs={isSummary ? undefined : 1} className='fs-5'>{isSummary ? '' : lvl}</Col>
      <Col xs={isSummary ? 12 : 11}>
        {isSummary && <h4 className='mb-3'>{lvl}</h4>}
        <Row className='gx-1'>{rows()}</Row>
      </Col>

      <MaterialDetails
        isAdditionalInfoShown={isAdditionalInfoShown}
        toggleAdditionalInfo={toggleAdditionalInfo}
        activeMaterial={activeMaterial}
        {...materialDetails}
      />
    </Row>
  )
}

export default Material
