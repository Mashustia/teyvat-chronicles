import {FC, ReactElement} from 'react'
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Col, Row, Container} from 'react-bootstrap';

import {ICharacterProps as IProps} from './types';
import {ICharacter} from '../../charactersData/types';
import CHARACTERS from '../../charactersData';
import TableItem from './components/TableItem';

const Character: FC<IProps> = ({ match: {params}}): ReactElement => {
  const { t } = useTranslation();
  const { name } = params
  const imagePath = `/images/characters/${name}.png`
  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === params.name)

  if (!activeCharacter) return <></>

  const ascensionMaterials = Object.entries(activeCharacter.ascension_materials)

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col sm={12} md={12} lg={9} xl={8} xxl={7}>
          <Row className='justify-content-center gx-3'>
            <Col xs={12} md={3} lg={3}>
              <img src={imagePath} alt={name} className='character-img'/>
              <h1 className='fs-3'>{t(`character:names.${name}`)}</h1>
            </Col>
            <Col xs={12} md={9} lg={9}>
              <h4 className='mb-3'>{t('character:ascension_materials')}</h4>
              {ascensionMaterials.map((value, index) => {
                if (!value[0]) return null

                return <TableItem data={value} key={index}/>
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(Character)
