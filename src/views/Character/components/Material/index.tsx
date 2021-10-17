import {FC} from 'react'
import {Col, Row} from 'react-bootstrap';
import {Img} from 'react-image';
import {useTranslation} from 'react-i18next';

import {ITableItemProps as IProps} from './types';
import {IMaterial} from '../../../../charactersData/types';
import './Material.css'
import {ReactComponent as Skeleton} from '../MaterialSkeleton/MaterialSkeleton.svg';
import {materialLink} from '../../../../charactersData/interactiveMapLinks';
import {interactiveMapBaseUrl, InteractiveMapLanguage} from '../../../../const/consts';

const Material: FC<IProps> = ({data: [lvl, materials]}) => {
  const {i18n, t} = useTranslation('materials')

  const rows = () => materials?.map(({material, count}: IMaterial, index: number) => {
    const imagePath = `/images/materials/${material}.png`

    const getInteractiveMapLink = (materialLink: string | undefined): string | undefined => {
      if (materialLink) return `${interactiveMapBaseUrl.replace('{{ language }}', InteractiveMapLanguage[i18n.language])}${materialLink}`

      return undefined
    }

    const interactiveMapLink: string | undefined = getInteractiveMapLink(materialLink[material])

    const materialName = t(`materials:${material}`)

    const image = (
      <Img
        src={imagePath}
        alt={materialName}
        className='ascension-material-img'
        loader={<Skeleton/>}
        unloader={<Skeleton/>}
      />
    )

    return (
      <Col key={index} className='d-flex flex-column'>
        <div className='ascension-material-img-wrapper mb-1'>
          <a className={interactiveMapLink && 'pointer'} href={interactiveMapLink}
             target='_blank' rel='noreferrer'>{image}</a>
        </div>
        <p className='my-auto text-break'>{materialName}</p>
        <p className='mb-0 fs-6'>{count}</p>
      </Col>
    )
  })

  return (
    <Row className='align-items-center gx-3 gy-2 table-border mb-3'>
      <Col xs={1} className='fs-5'>{lvl}</Col>
      <Col xs={11}>
        <Row className='gx-1'>{rows()}</Row>
      </Col>
    </Row>
  )
}

export default Material
