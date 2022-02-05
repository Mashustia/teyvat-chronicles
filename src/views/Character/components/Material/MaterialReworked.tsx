import {FC, useState} from 'react'
import {Img} from 'react-image';
import {useTranslation} from 'react-i18next';

import {ITableItemPropsReworked as IProps} from './types';
import {IMaterial} from '../../../../charactersData/types';
import './Material.css'
import {ReactComponent as Skeleton} from '../MaterialSkeleton/MaterialSkeleton.svg';
import {ExpandedMaterialInfo} from '../../../../charactersData/materials/expandedMaterialInfo';
import MaterialDetails from '../MaterialDetails';

// TODO: rename to Material after refactoring
const MaterialReworked: FC<IProps> = ({data: [materials]}) => {
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
      <div key={index} className='ascension-material-wrapper m-1'>
        <div className='ascension-material-img-wrapper mb-1'>
          {image}
        </div>
        <p className='mb-0 fs-6'>{count}</p>
      </div>
    )
  })

  const materialName = t(`materials:${activeMaterial}`)

  const materialDetails = ExpandedMaterialInfo[activeMaterial] ?? undefined

  return (
    <div className='d-flex flex-wrap ascension-material table-border justify-content-center p-2'>
      {rows()}

      <MaterialDetails
        isAdditionalInfoShown={isAdditionalInfoShown}
        toggleAdditionalInfo={toggleAdditionalInfo}
        activeMaterial={activeMaterial}
        {...materialDetails}
      />
    </div>
  )
}

export default MaterialReworked