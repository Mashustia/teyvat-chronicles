import {FC} from 'react'
import {Col, Row} from 'react-bootstrap';
import {Img} from 'react-image';

import {ITableItemProps as IProps} from './types';
import {IMaterial} from '../../../../charactersData/types';

import './Material.css'
import {ReactComponent as Skeleton} from '../MaterialSkeleton/MaterialSkeleton.svg';

const Material: FC<IProps> = ({data: [lvl, materials]}) => {
  const rows = () => materials?.map(({material, count}: IMaterial, index: number) => {
    const imagePath = `/images/materials/${material}.png`

    const image = (
      <Img
        src={imagePath}
        alt={material}
        className='ascension-material-img'
        loader={<Skeleton/>}
      />
    )

    return (
      <Col key={index}>
        <div className='ascension-material-img-wrapper mx-auto'>{image}</div>
        <p className='mb-0 fs-6'>{count}</p>
      </Col>
    )
  })

  return (
    <Row className='align-items-center gx-3 gy-2 table-border mb-3'>
      <Col xs={1} className='fs-5'>{lvl}</Col>
      <Col xs={11}>
        <Row className='align-items-center gx-1'>{rows()}</Row>
      </Col>
    </Row>
  )
}

export default Material
