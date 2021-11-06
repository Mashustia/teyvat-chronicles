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

const Material: FC<IProps> = ({data: [lvl, materials]}) => {
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

    return (
      <Col key={index} className='d-flex flex-column'>
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
    <Row className='align-items-center gx-3 gy-2 table-border mb-3'>
      <Col xs={1} className='fs-5'>{lvl}</Col>
      <Col xs={11}>
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
