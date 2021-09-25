import { FC } from 'react'
import {Col, Row} from 'react-bootstrap';

import {ITableItemProps as IProps} from './types';
import {IMaterial} from '../../../../charactersData/types';

const TableItem: FC<IProps> = ({data: [lvl, materials]}) => {
  console.log(lvl, materials)
  const rows = () => materials?.map(({material, count}: IMaterial, index: number) =>
    <Col key={index} xs={3}><p>{material}</p><p>{count}</p></Col>)

  return (
    <Row>
      <Col xs={2}>{lvl}</Col>
      <Col xs={10}>
        <Row>{rows()}</Row>
      </Col>
    </Row>
  )
}

export default TableItem
