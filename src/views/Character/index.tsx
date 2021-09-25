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
    <Container fluid>
      <Row>
        <Col xs={12} md={2}>
          <img src={imagePath} alt={name} className='character-img' />
          <h1>{t(`character:names.${name}`)}</h1>
        </Col>
        <Col xs={12} md={10}>
          <h4>{t('character:ascension_materials')}</h4>
          {ascensionMaterials.map((value, index) => {
            if (!value[0]) return null

            return <TableItem data={value} key={index}/>
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(Character)
