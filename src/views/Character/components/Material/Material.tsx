import {FC, useEffect, useState, Suspense} from 'react'
import {useTranslation} from 'react-i18next';
import prettyNum from 'prettify-numbers';

import {ITableItemPropsReworked as IProps} from './types';
import {IMaterial} from '../../../../charactersData/types';
import './Material.css'
import {ReactComponent as Skeleton} from '../MaterialSkeleton/MaterialSkeleton.svg';
import {ExpandedMaterialInfo} from '../../../../charactersData/materials/expandedMaterialInfo';
import MaterialDetails from '../MaterialDetails';
import {THOUSAND_SEPARATOR} from '../../../../const/consts';
import Img from '../../../../common/Img';

const Material: FC<IProps> = ({data: [materials]}) => {
  const {t} = useTranslation(['materials', 'material'])
  const [isAdditionalInfoShown, toggleAdditionalInfo] = useState(false)
  const [activeMaterial, toggleMaterial] = useState('')

  useEffect(() => {
    if (!materials.find((material: IMaterial) => material.material === activeMaterial)) {
      toggleMaterial(materials[0].material)
    }
  }, [materials, activeMaterial])

  const handleMaterialToggle = (material: string) => () => {
    toggleMaterial(material)
    toggleAdditionalInfo(material === activeMaterial ? !isAdditionalInfoShown : true)
  }

  const rows = () => materials?.map(({material, count}: IMaterial, index: number) => {
    const imagePath = `/images/materials/${material}.png`

    const image = (
      <Suspense fallback={<Skeleton width='76px' height='80px'/>}>
        <Img
          imagePath={imagePath}
          alt={materialName}
          classes='ascension-material-img'
          onClick={handleMaterialToggle(material)}
        />
      </Suspense>
    )

    return material && (
      <div key={index} className='ascension-material-wrapper m-1'>
        <div className='ascension-material-img-wrapper mb-1'>
          {image}
        </div>
        <p className='mb-0 fs-6'>{prettyNum(count, THOUSAND_SEPARATOR)}</p>
      </div>
    )
  })

  const materialName = t(`materials:${activeMaterial}`)

  const materialDetails = ExpandedMaterialInfo[activeMaterial] ?? undefined

  return (
    <div className='d-flex flex-wrap ascension-material table-border justify-content-center p-2 mt-3'>
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

export default Material
