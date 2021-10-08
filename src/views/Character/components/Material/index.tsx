import {FC} from 'react'
import {Col, Row} from 'react-bootstrap';
import {Img} from 'react-image';
import {useTranslation} from 'react-i18next';

import {ITableItemProps as IProps} from './types';
import {IMaterial} from '../../../../charactersData/types';
import './Material.css'
import {ReactComponent as Skeleton} from '../MaterialSkeleton/MaterialSkeleton.svg';
import {materialLink} from '../../../../charactersData/interactiveMapLinks';
import {InteractiveMapLanguage} from '../../../../const/consts';

const Material: FC<IProps> = ({data: [lvl, materials]}) => {
  const {i18n} = useTranslation()

  const rows = () => materials?.map(({material, count}: IMaterial, index: number) => {
    const imagePath = `/images/materials/${material}.png`

    const interactiveMapLink: string | undefined = materialLink[material]?.replace('{{ language }}', InteractiveMapLanguage[i18n.language])

    const image = (
      <Img
        src={imagePath}
        alt={material}
        className='ascension-material-img'
        loader={<Skeleton/>}
        unloader={<Skeleton/>}
      />
    )

    return (
      <Col key={index}>
        <div className='ascension-material-img-wrapper mx-auto'>
          <a className={interactiveMapLink && 'pointer'} href={interactiveMapLink}
             target='_blank' rel='noreferrer'>{image}</a>
        </div>
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
